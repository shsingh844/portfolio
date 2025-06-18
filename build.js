const fs = require('fs');

console.log('🔧 Building portfolio...');

// Read the template file
let html = fs.readFileSync('index-template.html', 'utf8');

// Replace placeholder with environment variable
const gaId = process.env.GA_MEASUREMENT_ID || 'GA_NOT_SET';
html = html.replace(/\{\{GA_MEASUREMENT_ID\}\}/g, gaId);

// Write the final HTML file
fs.writeFileSync('index.html', html);

console.log('✅ Build complete with GA ID:', gaId.substring(0, 8) + '...');
console.log('📁 Generated: index.html (' + html.length + ' characters)');