const express = require("express");
const app = express();
const connectDB = require('./config/db');

// call connectDB
connectDB();

// initial middleware
app.use(express.json({
    extended: false
}));

// test routes
app.get('/', (req, res) => res.json('API is works!'));

// define
app.use('/api/users', require('./routes/api/users'))
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/profile', require('./routes/api/profile'))
app.use('/api/posts', require('./routes/api/posts'))

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));