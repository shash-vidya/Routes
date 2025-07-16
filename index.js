const express = require('express');
const app = express();
const PORT = 4000;

// Route: GET /products
app.get('/products', (req, res) => {
    res.send('Here is the list of all products.');
});

// Route: POST /products
app.post('/products', (req, res) => {
    res.send('A new product has been added.');
});

// Route: GET /categories
app.get('/categories', (req, res) => {
    res.send('Here is the list of all categories.');
});

// Route: POST /categories
app.post('/categories', (req, res) => {
    res.send('A new category has been created.');
});

// ✅ Wildcard Route for undefined routes
app.use((req, res) => {
    res.status(404).send('<h1>404 - Page Not Found</h1>');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
