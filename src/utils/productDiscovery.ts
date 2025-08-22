// Product discovery utility for dynamically loading products from image directories

export interface Product {
  id: string;
  name: string;
  image: string;
}

// Transform filename to human-readable product name
export const formatProductName = (filename: string): string => {
  // Remove file extension
  const nameWithoutExt = filename.replace(/\.[^/.]+$/, '');
  
  // Remove (1) or similar patterns at the end
  const cleanName = nameWithoutExt.replace(/\(\d+\)$/, '');
  
  // Split by common separators and capitalize each word
  return cleanName
    .split(/[-_\s]+/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')
    .trim();
};

// Get products from plumbing directory
export const getPlumbingProducts = async (): Promise<Product[]> => {
  // Updated list based on actual files in the directory
  const plumbingFiles = [
    '100X remote control float valve(1).png',
    '300X slow closing check valve(1).png',
    '400X flow control valve(1).png',
    '500X pressure reliefmaintaining valve(1).png',
    '600X hydraulic electric control valve(1).png',
    '700X water pump control valve(1).png',
    '800X differential pressure control valve(1).png',
    '900X Emergency Shutoff Valve(1).png',
    'A-type wafer butterfly valve D371X-1016(1).png',
    'A-type wafer butterfly valve D71X-1016 (2)(1).png',
    'A-type wafer butterfly valve D71X-1016(1).png',
    'APRX compound exhaust valve(1).png',
    'AVAX automatic exhaust valve(1).png',
    'Anti-fouling isolation valve(1).png',
    'Anti-theft self-locking elastic seat sealing gate valve(1).png',
    'Backflow preventer(1).png',
    'Ball check valve(1).png',
    'Bevel gear transmission flange connection elastic seat seal gate valve(1).png',
    'Brass check valve H14W-16T (2)(1).png',
    'Brass check valve H14W-16T(1).png',
    'Brass exhaust valve P25X-16T(1).png',
    'Brass filter LG11-16T(1).png',
    'Brass flange gate valve Z45W-16T(1).png',
    'Brass full-bore ball valve Q11F-16T(1).png',
    'Brass heavy gate valve Z15W-16T(1).png',
    'Brass internal and external threaded joint ball valve Q31F-16T(1).png',
    'Brass lock gate valve Z15W-16T(1).png',
    'Brass magnetic lock ball valve Q11F-16T(1).png',
    'Brass pressure reducing valve Y12X-16T(1).png',
    'Brass stop valve J11-16T(1).png',
    'Civil air defense product series(1).png',
    'Double-port exhaust valve(1).png',
    'Eccentric hemispherical valve(1).png',
    'Elastic seat gate valve(1).png',
    'Electric flange connection elastic seat seal gate valve(1).png',
    'Filter(1).png',
    'Fixed cone valve(1).png',
    'Flange muffler check valve H41XT-16(1).png',
    'Flange type hard seal butterfly valve(1).png',
    'Flange type telescopic butterfly valve SD341X-1016(1).png',
    'Flange vertical silencer check valve(1).png',
    'Flanged butterfly valve D341X-1016(1).png',
    'Grooved Silencer Check Valve H81X(1).png',
    'Grooved butterfly valve D381X(1).png',
    'Grooved butterfly valve D81X(1).png',
    'Grooved elastic seated gate valve Z81X(1).png',
    'Grooved elastic seated gate valve Z85X(1).png',
    'Grooved filter check valve (2)(1).png',
    'Grooved filter check valve(1).png',
    'High and medium voltage product collection(1).png',
    'Non-rising stem hard seal gate valve (2)(1).png',
    'Non-rising stem hard seal gate valve (3)(1).png',
    'Non-rising stem hard seal gate valve(1).png',
    'Piping system(1).png',
    'Piston type flow control valve (2)(1).png',
    'Piston type flow control valve(1).png',
    'Resilient Seat Seat Gate Valve(With Opening Indicator) RVHI(1).png',
    'Rising Stem Gate Valve RRHR(1).png',
    'Rising stem elastic seated gate valve(1).png',
    'Rising stem hard seal gate valve (2)(1).png',
    'Rising stem hard seal gate valve(1).png',
    'Rubber flap check valve(1).png',
    'SCAR sewage composite exhaust valve(1).png',
    'SZ15X soft seal thread lock gate valve(1).png',
    'Scale, signal gate valve(1).png',
    'Signal butterfly valve(1).png',
    'Signal gate valve RVSX(1).png',
    'Slurry valve ZT9928-610(1).png',
    'Socket type elastic seat seal gate valve(1).png',
    'Straight-through filter(1).png',
    'Straight-through telescopic filter(1).png',
    'TSX-6, 10, 16, 25 series flange pipe expansion joints(1).png',
    'Underground elastic seat gate valve(1).png',
    'VSSJA Flange Type Limited Expansion Joint(1).png',
    'VSSJA-1 double flange limited expansion joint(1).png',
    'VSSJA-2 double flange limited expansion joint(1).png',
    'VSSJAFG double flange force transmission joint(1).png',
    'VSSJAFG single flange force transfer joint(1).png',
    'Valve Collection(1).png',
    'Wafer Silencer Check Valve H71XT-16(1).png',
    'Wafer type hard seal butterfly valve(1).png',
    'Water flow indicator(1).png',
    'Wet alarm valve(1).png',
    'Z15X soft seal thread lock gate valve(1).png',
    'ZAX742 safety pressure relief valve(1).png',
    'ZF745 hydraulic (remote control) float valve(1).png',
    'ZJ 745X multifunctional water pump control valve (2)(1).png',
    'ZJ 745X multifunctional water pump control valve(1).png',
    'ZJ145X electric remote control valve(1).png',
    'ZYX741X pressure reducing valve(1).png',
    'connector(1).png'
  ];

  return plumbingFiles.map((filename, index) => ({
    id: (index + 1).toString(),
    name: formatProductName(filename),
    image: `/images/plumbing/${filename}`
  }));
};

// Generic function to get products from any directory
export const getProductsFromDirectory = async (directory: string): Promise<Product[]> => {
  // This would be implemented with an API endpoint that lists files in a directory
  // For now, we'll just return the plumbing products as an example
  if (directory === 'plumbing') {
    return getPlumbingProducts();
  }
  
  return [];
};

