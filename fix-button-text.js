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

  // Find the Barriers button and update the text
  let updatedContent = data.replace(
    />Barriers & Recommendations</g,
    '>Barriers&nbsp;&&nbsp;Recommendations<'
  );

  // Add the necessary style properties to all buttons to make them display correctly
  updatedContent = updatedContent.replace(
    /fontSize: '0\.9rem'(\s+})/g,
    "fontSize: '0.9rem',\n                        whiteSpace: 'nowrap'$1"
  );

  // Set a fixed width for the buttons container to ensure they're side by side
  updatedContent = updatedContent.replace(
    /<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: 2 }}>/g,
    "<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: 2, justifyContent: 'flex-start' }}>"
  );

  // Reduce padding on buttons
  updatedContent = updatedContent.replace(
    /py: 0\.7,/g,
    "py: 0.6, px: 1.2,"
  );

  // Write the updated content back to the file
  fs.writeFile(filePath, updatedContent, 'utf8', (err) => {
    if (err) {
      console.error('Error writing to file:', err);
      return;
    }
    console.log('Successfully fixed button text to display on same line');
  });
});
