const express = require('express');
const aiRoutes = require('./routes/ai.routes')
const cors = require('cors')

const app = express()



// --- 1. CORS Configuration (CRITICAL FIX) ---
// We define the specific origin to allow communication from your Vercel app.
const corsOptions = {
    // The specific URL of your Vercel frontend (no trailing slash needed)
    origin: "https://ai-wine-nine-15.vercel.app/", 
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, // Allows cookies, authorization headers, etc.
    optionsSuccessStatus: 200 
};

app.use(cors(corsOptions));
// ---------------------------------------------


// --- 2. Middleware for Body Parsing ---
// Allows Express to read JSON data sent in POST requests
app.use(express.json());


// --- 3. Simple Health Check Route ---
app.get('/', (req, res) => {
    res.send('AI Backend Running');
});


// --- 4. Route Mounting ---
// Attaches your AI routes under the /ai path
app.use('/ai', aiRoutes);




module.exports = app
