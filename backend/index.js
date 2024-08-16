const app = require("./app");
const dotenv = require('dotenv');
const connectDatabase = require("./src/config/db.config");

dotenv.config();
connectDatabase();

const port = process.env.PORT || 3333;
// const isProduction = process.env.NODE_ENV === "production";

app.listen(port, ()=>{
    console.log(`Server is listening on port: ${port}`);
})