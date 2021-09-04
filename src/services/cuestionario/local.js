import { leerArchivo, escribirArchivo } from "../fileManager";

const getCuestionario = async evt => {
  const preguntas = await leerArchivo("preguntas.json")
  const preguntas2 = await leerArchivo("preguntas2.json")
  const cuestionario = [
    ...preguntas.sort().slice(0, 32),
    ...preguntas2.sort().slice(0, 3)
  ].sort()
  return cuestionario
};

const getListasPreguntas = async (evt) => {
  const listas = new Array();
  listas.push(
    await leerArchivo("preguntas.json"),
    await leerArchivo("preguntas2.json")
  );
  return listas
};

const addPregunta = async (evt, { pregunta, ptos }) => {
  const archivo = ["preguntas.json", "preguntas2.json"];
  const lista = await leerArchivo(archivo[ptos]);
  lista.push(pregunta);
  escribirArchivo(archivo[ptos], lista);
  return lista;
};

const modPregunta = async (evt, { pregunta, ptos, idx }) => {
  const archivo = ["preguntas.json", "preguntas2.json"];
  const lista = await leerArchivo(archivo[ptos]);
  lista[idx] = pregunta;
  escribirArchivo(archivo[ptos], lista);
  return lista;
};

const delPregunta = async (evt, { ptos, idx }) => {
  const archivo = ["preguntas.json", "preguntas2.json"];
  const lista = await leerArchivo(archivo[ptos]);
  lista.splice(idx, 1);
  escribirArchivo(archivo[ptos], lista);
  return lista;
};

export default {
  getCuestionario,
  getListasPreguntas,
  addPregunta,
  modPregunta,
  delPregunta,
};
