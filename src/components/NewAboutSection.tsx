import React from 'react';

const NewAboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">
              About Rongwang Trading
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Established on September 12, 2024, Quanzhou Licheng Rongwang Trading Co., Ltd. 
              is strategically located in Licheng District, Quanzhou City, Fujian Province. 
              We specialize in construction machinery parts and industrial equipment supply 
              with a focus on excavators, bulldozers, and crawler cranes.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our core business encompasses sales of construction machinery parts, supply of 
              industrial equipment and materials including heavy-duty packaging, electromechanical 
              equipment, plumbing systems, and general mechanical equipment. We maintain strategic 
              partnerships with global first-line brands and domestic leading manufacturers.
            </p>
            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600">2024</div>
                <div className="text-sm text-gray-500">Established</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600">Global</div>
                <div className="text-sm text-gray-500">Supply Network</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600">Full-Chain</div>
                <div className="text-sm text-gray-500">Solutions</div>
              </div>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative">
            <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden">
              <img
                src="https://d64gsuwffb70l.cloudfront.net/6851c928ae14ce6b91d39954_1750253518562_224df5f1.jpg"
                alt="Construction machinery parts and industrial equipment"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-yellow-400 text-gray-900 p-6 rounded-lg shadow-lg">
              <div className="text-2xl font-bold">Professionalism</div>
              <div className="text-sm font-medium">Integrity & Win-Win</div>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Our Core Competitiveness</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-lg font-semibold text-yellow-600 mb-3">Precise Supply Chain</h4>
              <p className="text-gray-600 text-sm">
                Strategic cooperation with global first-line brands and domestic leading manufacturers, 
                ensuring optimal performance and price advantages.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-lg font-semibold text-yellow-600 mb-3">Professional Team</h4>
              <p className="text-gray-600 text-sm">
                Compound expertise in mechanical engineering, international trade, and supply chain 
                management with comprehensive technical support services.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-lg font-semibold text-yellow-600 mb-3">Full-Chain Solutions</h4>
              <p className="text-gray-600 text-sm">
                Complete services including import/export agency, international logistics, 
                customs clearance, and warehousing distribution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewAboutSection;