import { LoginService } from './login.service';

export let moduleName = 'loginModule';

angular.module(moduleName, [])
.service('loginService', LoginService)