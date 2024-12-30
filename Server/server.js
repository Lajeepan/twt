const app = require('./app');
require('./db');
require('dotenv').config(); 

const cors = require('cors');
const PORT = process.env.PORT || 3001

app.use(cors());

app.listen(PORT, () => {
    console.log(`Server runn ing on http://localhost:${PORT}`);
});