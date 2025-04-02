const fs = require('fs');
const path = require('path');

// Path to the ApproachSection.tsx file
const filePath = path.join(__dirname, 'src', 'components', 'ApproachSection.tsx');

// Read the current content of the file
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  // First find the Thermal Interconnections section
  const thermalSection = data.indexOf('Thermal Interconnections');
  if (thermalSection === -1) {
    console.error('Could not find Thermal Interconnections section');
    return;
  }

  // Find the Technical Report button and add endIcon
  let updatedContent = data.replace(
    /startIcon={<MenuBookIcon sx={{ fontSize: '0\.9rem' }} \/>}\s+href="https:\/\/surplusinterconnection\.s3\.us-east-1\.amazonaws\.com\/2025-02-21_GridLab_Surplus_Interconnection_Technical_Paper\.pdf"/g,
    'startIcon={<MenuBookIcon sx={{ fontSize: \'0.9rem\' }} />}\n                      endIcon={<LaunchIcon sx={{ fontSize: \'0.9rem\' }} />}\n                      href="https://surplusinterconnection.s3.us-east-1.amazonaws.com/2025-02-21_GridLab_Surplus_Interconnection_Technical_Paper.pdf"'
  );

  // Find the Issue Brief button and add endIcon
  updatedContent = updatedContent.replace(
    /startIcon={<SummarizeIcon sx={{ fontSize: '0\.9rem' }} \/>}\s+href="https:\/\/surplusinterconnection\.s3\.us-east-1\.amazonaws\.com\/GridLab_Surplus_Interconnection_Issue_Brief\.pdf"/g,
    'startIcon={<SummarizeIcon sx={{ fontSize: \'0.9rem\' }} />}\n                      endIcon={<LaunchIcon sx={{ fontSize: \'0.9rem\' }} />}\n                      href="https://surplusinterconnection.s3.us-east-1.amazonaws.com/GridLab_Surplus_Interconnection_Issue_Brief.pdf"'
  );

  // Find the Barriers & Recommendations button and add endIcon
  updatedContent = updatedContent.replace(
    /startIcon={<LightbulbIcon sx={{ fontSize: '0\.9rem' }} \/>}\s+href="https:\/\/surplusinterconnection\.s3\.us-east-1\.amazonaws\.com\/2025-02-21_GridLab_Surplus_Interconnection_Barriers_Report\.pdf"/g,
    'startIcon={<LightbulbIcon sx={{ fontSize: \'0.9rem\' }} />}\n                      endIcon={<LaunchIcon sx={{ fontSize: \'0.9rem\' }} />}\n                      href="https://surplusinterconnection.s3.us-east-1.amazonaws.com/2025-02-21_GridLab_Surplus_Interconnection_Barriers_Report.pdf"'
  );

  // Write the updated content back to the file
  fs.writeFile(filePath, updatedContent, 'utf8', (err) => {
    if (err) {
      console.error('Error writing to file:', err);
      return;
    }
    console.log('Successfully added LaunchIcon to all document buttons');
  });
});
