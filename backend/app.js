const express = require("express");
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const routers = require('./src/routes');
let { Keyring, ApiPromise, WsProvider } = require("@polkadot/api");
const { jsonrpc } = require("@polkadot/types/interfaces/jsonrpc");
const chainConfig = require("./src/config/chain.config.js");



//end require

const app = express();

// config
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: "backend/src/config/config.env" });
}

app.use(helmet());
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());
app.use(routers);
__dirname = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("Server is Running! 🚀");
  });
}


// ETH
const { ethers, BigNumber } = require("ethers");

// contract
const QUICKNODE_ENDPOINT = process.env.HTTP_PROVIDER_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY

const provider = new ethers.JsonRpcProvider(QUICKNODE_ENDPOINT)
const signer = new ethers.Wallet(PRIVATE_KEY, provider)

const userAddress = signer.address

const {tournamentContract} = require("./src/contracts/tournament.js");

const contract = new ethers.Contract(tournamentContract.contractAddress, tournamentContract.contractABI, signer)
const contractWithSigner = contract.connect(signer)
console.log(QUICKNODE_ENDPOINT);
async function readContract() {
  const fee = await contract.setFee(1000000);
  const getfee = await contract.feeTournament();
  console.log(getfee);
}

// Call the functions
;(async () => {
  await readContract()
})().catch(console.error)

module.exports = app;
