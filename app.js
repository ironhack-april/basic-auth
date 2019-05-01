// app.js

const bcrypt     = require("bcrypt");
const saltRounds = 15;

const plainPassword1 = "HelloWorld";
//const plainPassword2 = "helloworld";

const salt  = bcrypt.genSaltSync(saltRounds);
const hash1 = bcrypt.hashSync(plainPassword1, salt);

const hash2 = bcrypt.hashSync(plainPassword1, salt);

console.log("Hash  -", hash1, hash2);
//console.log("Hash 2 -", hash2);