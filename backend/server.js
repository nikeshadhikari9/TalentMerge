const app = require('./app');
const { PORT } = require('./config/env.config');
const connectDB = require('./config/db.config');

//connection to db
connectDB();

//starting a server
app.listen(PORT, () => {
    console.log("Server running on Port:", PORT, "\nhttp://localhost:", PORT);
})