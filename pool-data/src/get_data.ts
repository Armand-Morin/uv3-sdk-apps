import { getFullPool } from './libs/pool-data';
import fs from 'fs';
import path from 'path';

async function run() {
  const poolAddress = '0x8ad599c3A0ff1De082011EFDDc58f1908eb6e6D8'; // Replace with your pool address
  const bench = await getFullPool();
  console.log(bench);
  // // Convert the computed data to a JSON string
  // const dataString = JSON.stringify(bench, null, 2);

  // // Define the output path
  // const outputPath = path.join(__dirname, 'output.json');

  // // Write the data to a file
  // fs.writeFile(outputPath, dataString, (err) => {
  //   if (err) {
  //     console.error('Error writing file', err);
  //   } else {
  //     console.log('Successfully wrote file');
  //   }
  // });
}

run();