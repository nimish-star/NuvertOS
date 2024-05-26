const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');
const moment = require('moment');
const { Compound } = require('./models');

const filePath = path.join('C:/Users/NIMISH LAKHMANI/Downloads', 'compound_compound_utf8.csv');

fs.createReadStream(filePath)
  .pipe(csv())
  .on('data', async (row) => {
    try {
      const dateModified = moment(row.dateModified, 'DD-MM-YYYY HH:mm').format('YYYY-MM-DD HH:mm:ss');
      
      await Compound.create({
        id: row.id,
        CompoundName: row.CompoundName,
        CompounrDescription: row.CompounrDescription,
        strImageSource: row.strImageSource,
        strImageAttribution: row.strImageAttribution,
        dateModified: dateModified
      });
    } catch (error) {
      console.error('Error inserting row:', error);
    }
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
  });