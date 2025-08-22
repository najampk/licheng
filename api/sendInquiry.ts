import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface InquiryData {
  product: string;
  name: string;
  email: string;
  message: string;
}

export default async function handler(req: Request): Promise<Response> {
  // Handle CORS
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return new Response(
      JSON.stringify({ error: 'Method not allowed' }),
      {
        status: 405,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders,
        },
      }
    );
  }

  try {
    const body: InquiryData = await req.json();
    const { product, name, email, message } = body;

    // Validate required fields
    if (!product || !name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
            ...corsHeaders,
          },
        }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: 'Invalid email format' }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
            ...corsHeaders,
          },
        }
      );
    }

    // Send email using Resend
    const emailData = {
      from: 'Licheng Rongwang Trading <noreply@lichengrongwang.com>',
      to: ['sales@lichengrongwang.com'], // Replace with actual sales email
      subject: `Product Inquiry: ${product}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #f97316; border-bottom: 2px solid #f97316; padding-bottom: 10px;">
            New Product Inquiry
          </h2>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Product Details</h3>
            <p><strong>Product:</strong> ${product}</p>
          </div>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Customer Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
          </div>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Message</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">
            <p>This inquiry was submitted through the Licheng Rongwang Trading website.</p>
            <p>Please respond to the customer within 24 hours.</p>
          </div>
        </div>
      `,
      text: `
New Product Inquiry

Product: ${product}

Customer Information:
Name: ${name}
Email: ${email}

Message:
${message}

This inquiry was submitted through the Licheng Rongwang Trading website.
Please respond to the customer within 24 hours.
      `,
    };

    // Send the email
    const { data, error } = await resend.emails.send(emailData);

    if (error) {
      console.error('Resend error:', error);
      return new Response(
        JSON.stringify({ error: 'Failed to send email' }),
        {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
            ...corsHeaders,
          },
        }
      );
    }

    // Send auto-reply to customer
    const autoReplyData = {
      from: 'Licheng Rongwang Trading <noreply@lichengrongwang.com>',
      to: [email],
      subject: 'Thank you for your inquiry - Licheng Rongwang Trading',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #f97316; border-bottom: 2px solid #f97316; padding-bottom: 10px;">
            Thank You for Your Inquiry
          </h2>
          
          <p>Dear ${name},</p>
          
          <p>Thank you for your interest in our <strong>${product}</strong>. We have received your inquiry and our sales team will get back to you within 24 hours.</p>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Your Inquiry Details</h3>
            <p><strong>Product:</strong> ${product}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; font-style: italic;">${message}</p>
          </div>
          
          <p>In the meantime, feel free to browse our other products or contact us directly:</p>
          <ul>
            <li>Email: sales@lichengrongwang.com</li>
            <li>Phone: +86 XXX XXXX XXXX</li>
            <li>Website: www.lichengrongwang.com</li>
          </ul>
          
          <p>Best regards,<br>
          <strong>Licheng Rongwang Trading Team</strong></p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
            <p>This is an automated response. Please do not reply to this email.</p>
          </div>
        </div>
      `,
      text: `
Dear ${name},

Thank you for your interest in our ${product}. We have received your inquiry and our sales team will get back to you within 24 hours.

Your Inquiry Details:
Product: ${product}
Message: ${message}

In the meantime, feel free to browse our other products or contact us directly:
- Email: sales@lichengrongwang.com
- Phone: +86 XXX XXXX XXXX
- Website: www.lichengrongwang.com

Best regards,
Licheng Rongwang Trading Team

This is an automated response. Please do not reply to this email.
      `,
    };

    // Send auto-reply (don't fail the main request if this fails)
    try {
      await resend.emails.send(autoReplyData);
    } catch (autoReplyError) {
      console.error('Auto-reply error:', autoReplyError);
      // Continue without failing the main request
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Inquiry sent successfully',
        id: data?.id 
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders,
        },
      }
    );

  } catch (error) {
    console.error('Server error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders,
        },
      }
    );
  }
}

