// Korzystając z node.js zmień nazwę pliku z example.json na sample.json

// STEP1 - Run Node in console
// STEP2 - Past this function in the console

fs.rename('example.json', 'sample.json', (err) => {
  if (err) throw err;
  console.log('TASK5 - Rename complete!');
});
