const path = require("path");
const fs = require("fs");

let direccionArchivo = path.join(__dirname, "data");

export const leerArchivo = (archivo) => {
  return new Promise((res, rej) => {
    fs.readFile(
      path.join(direccionArchivo, archivo),
      { encoding: "utf-8" },
      (err, data) => {
        if (err) rej(err);
        else res(JSON.parse(data));
      }
    );
  });
};

export const escribirArchivo = (archivo, data) => {
  fs.writeFile(
    path.join(direccionArchivo, archivo),
    JSON.stringify(data, null, 2),
    (err) => {
      if (err) throw err;
    }
  );
};

export default {
  leerArchivo,
  escribirArchivo
}