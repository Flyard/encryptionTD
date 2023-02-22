const { generateKeyPair } = require("crypto");
const crypto = require("crypto");

generateKeyPair(
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
