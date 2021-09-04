import localSvc from './local'
import serverSvc from './server'
import { ipcMain } from 'electron'

let svc = localSvc

if(process.env.APP_MODE == 'server') svc = serverSvc

export default () => {
  ipcMain.handle('getCuestionario', svc.getCuestionario)
  ipcMain.handle('getListasPreguntas', svc.getListasPreguntas)
  ipcMain.handle('addPregunta', svc.addPregunta)
  ipcMain.handle('modPregunta', svc.modPregunta)
  ipcMain.handle('delPregunta', svc.delPregunta)
}