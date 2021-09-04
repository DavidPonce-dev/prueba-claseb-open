import localSvc from './local'
import serverSvc from './server'

const svc = localSvc

if(process.env.APP_MODE == 'server') svc = serverSvc


export default svc