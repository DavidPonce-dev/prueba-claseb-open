import { leerArchivo, escribirArchivo } from '../local/fileManager'

  const login = async (evt, user) => {
    const cuentas = await leerArchivo("cuentas.json");
    const log = cuentas.filter(cuenta => cuenta.user == usuario.user && cuenta.pass == usuario.pass)
    evt.reply("repLogin", log[0]);
  };

  const register = async (evt, user) => {
    
  }

  const setPass = async (evt, { user, pass, newPass }) => {
    cuentas = await leerArchivo("cuentas.json");
    for (cuenta of cuentas) {
      if (cuenta.user == user && cuenta.pass == pass) {
        cuenta.pass = newPass;
        escribirArchivo("cuentas.json", cuentas);
        return true;
      }
    }
    return false;
  };

  export default {
    login,
    register,
    setPass
  }