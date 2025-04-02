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

  // First, add the necessary imports
  let newContent = data;
  if (!newContent.includes('import DescriptionIcon')) {
    newContent = newContent.replace(
      'import PictureAsPdfIcon from \'@mui/icons-material/PictureAsPdf\';',
      'import PictureAsPdfIcon from \'@mui/icons-material/PictureAsPdf\';\n' +
      'import DescriptionIcon from \'@mui/icons-material/Description\';\n' +
      'import ArticleIcon from \'@mui/icons-material/Article\';\n' +
      'import AssignmentIcon from \'@mui/icons-material/Assignment\';'
    );
  }

  // Find the section with Thermal Interconnections
  const thermalSection = newContent.indexOf('Thermal Interconnections');
  
  // Find the Dashboard button and Report button after the Thermal Interconnections heading
  const dashboardStart = newContent.indexOf('Dashboard', thermalSection);
  
  if (dashboardStart !== -1) {
    // Find the start of the button container
    const buttonContainerStart = newContent.lastIndexOf('<Box sx={{ display:', dashboardStart - 200);
    
    // Find the end of the button container
    const buttonContainerEnd = newContent.indexOf('</Box>', buttonContainerStart) + 6;
    
    // Extract the button container content
    const buttonContainer = newContent.substring(buttonContainerStart, buttonContainerEnd);
    
    // Create the new button container with the three document links
    const newButtonContainer = 
      '                  {/* Action Buttons */}\n' +
      '                  <Box sx={{ display: \'flex\', flexDirection: \'column\', gap: 1, mt: 2 }}>\n' +
      '                    <Button \n' +
      '                      variant="contained" \n' +
      '                      size="small"\n' +
      '                      startIcon={<DescriptionIcon sx={{ fontSize: \'0.9rem\' }} />}\n' +
      '                      href="https://surplusinterconnection.s3.us-east-1.amazonaws.com/2025-02-21_GridLab_Surplus_Interconnection_Technical_Paper.pdf" \n' +
      '                      target="_blank"\n' +
      '                      sx={{ \n' +
      '                        bgcolor: \'#B44D12\', \n' +
      '                        \'&:hover\': { bgcolor: \'#933F0F\' },\n' +
      '                        py: 0.7,\n' +
      '                        fontSize: \'0.9rem\',\n' +
      '                        whiteSpace: \'nowrap\',\n' +
      '                        width: \'fit-content\'\n' +
      '                      }}\n' +
      '                    >\n' +
      '                      Technical Report\n' +
      '                    </Button>\n' +
      '                    <Button \n' +
      '                      variant="contained" \n' +
      '                      size="small"\n' +
      '                      startIcon={<ArticleIcon sx={{ fontSize: \'0.9rem\' }} />}\n' +
      '                      href="https://surplusinterconnection.s3.us-east-1.amazonaws.com/GridLab_Surplus_Interconnection_Issue_Brief.pdf" \n' +
      '                      target="_blank"\n' +
      '                      sx={{ \n' +
      '                        bgcolor: \'#B44D12\', \n' +
      '                        \'&:hover\': { bgcolor: \'#933F0F\' },\n' +
      '                        py: 0.7,\n' +
      '                        fontSize: \'0.9rem\',\n' +
      '                        whiteSpace: \'nowrap\',\n' +
      '                        width: \'fit-content\'\n' +
      '                      }}\n' +
      '                    >\n' +
      '                      Issue Brief\n' +
      '                    </Button>\n' +
      '                    <Button \n' +
      '                      variant="contained" \n' +
      '                      size="small"\n' +
      '                      startIcon={<AssignmentIcon sx={{ fontSize: \'0.9rem\' }} />}\n' +
      '                      href="https://surplusinterconnection.s3.us-east-1.amazonaws.com/2025-02-21_GridLab_Surplus_Interconnection_Barriers_Report.pdf" \n' +
      '                      target="_blank"\n' +
      '                      sx={{ \n' +
      '                        bgcolor: \'#B44D12\', \n' +
      '                        \'&:hover\': { bgcolor: \'#933F0F\' },\n' +
      '                        py: 0.7,\n' +
      '                        fontSize: \'0.9rem\',\n' +
      '                        whiteSpace: \'nowrap\',\n' +
      '                        width: \'fit-content\'\n' +
      '                      }}\n' +
      '                    >\n' +
      '                      Barriers & Recommendations\n' +
      '                    </Button>\n' +
      '                  </Box>';
    
    // Replace the old button container with the new one
    newContent = newContent.substring(0, buttonContainerStart) + newButtonContainer + newContent.substring(buttonContainerEnd);
    
    // Write the updated content back to the file
    fs.writeFile(filePath, newContent, 'utf8', (err) => {
      if (err) {
        console.error('Error writing to file:', err);
        return;
      }
      console.log('Successfully updated ApproachSection.tsx');
    });
  } else {
    console.error('Could not find Dashboard button after Thermal Interconnections');
  }
});
