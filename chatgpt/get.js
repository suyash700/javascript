const express = require('express');
const app = express();

app.use(express.static('public')); // Serve HTML files from the "public" folder

app.use(express.json());

const users = [
    { username: 'admin', password: 'admin123', role: 'admin' },
    { username: 'user', password: 'user123', role: 'user' }
];

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Check user credentials
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        res.json({ role: user.role });
    } else {
        res.status(401).send('Invalid credentials');
    }
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
