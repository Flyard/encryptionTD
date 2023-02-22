/**
 * An initialization vector (IV) is ...
 */
const crypto = require("crypto");

const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

function encrypt(input, key) {
  const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
  let output = cipher.update(input, "utf8", "hex");
  output += cipher.final("hex");
  return output;
}

console.log("Encrypted data: " + encrypt("coucou", key));
let result = encrypt("coucou", key);

function decrypt(input, key) {
  const decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);
  let output = decipher.update(Buffer.from(result, "hex"), "utf8");
  output += decipher.final("utf8");
  return output;
}

console.log("Decrypted data: " + decrypt(result, key));
