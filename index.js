const db = require("./db");
const fs = require("fs");

const writable = fs.createWriteStream("pessoas.csv");

const query = db.query("select * from pessoas;");
writable.write("id,nome\n", () => {
  query.on("result", row => {
    db.pause();
    const data = `${row.id},${row.nome}\n`;
    writable.write(data, () => {
      db.resume();
    });
  });

  query.on("end", () => {
    writable.end();
    db.end();
  });
});
