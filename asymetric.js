const { generateKeyPair } = require("crypto");
const crypto = require("crypto");
require("dotenv").config();

let test = generateKeyPair(
  "rsa",
  {
    modulusLength: 4096,
    //public key
    publicKeyEncoding: {
      type: "spki",
      format: "pem",
    },
    //private key
    privateKeyEncoding: {
      type: "pkcs8",
      format: "pem",
      cipher: "aes-256-cbc",
      passphrase: "pass",
    },
  },
  (err, publicKey, privateKey) => {}
);

const publicKeyObject = crypto.createPublicKey(process.env.PUBLIC_KEY);
publicKeyObject.export({
  format: "pem",
  type: "spki",
});
