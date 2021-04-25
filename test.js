const crypto = require("crypto");
signingStr = "GET /list?bucket=kagurakana\nHost: rsf.qbox.me\n\n";

let mode = crypto.createHmac(
  "SHA1",
  "qgOhLpBSTgNyFa-ZYq_PhYQ1-rlsWzKU7sX1RQry"
);

let str = mode.update(signingStr).digest("hex");

str = crypto.createHash("MD5").update(str).digest("hex")

let str1= str.replace('+','-').replace('/','_')
console.log(str1);

