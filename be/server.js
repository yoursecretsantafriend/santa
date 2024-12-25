const express = require('express');
const xlsx = require('xlsx');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000;

app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

function readExcelFile() {
    const filePath = path.join(__dirname, 'final CRISTMAS USERS ID AND PASSWORD.xlsx');  // Adjust path as needed
    const workbook = xlsx.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const data = xlsx.utils.sheet_to_json(sheet);

    return data;
}

app.get('/users', (req, res) => {
    try {
        const users = readExcelFile();
        res.json(users); 
    } catch (error) {
        res.status(500).send('Error reading Excel file');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
