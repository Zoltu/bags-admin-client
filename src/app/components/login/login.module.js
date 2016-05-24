import { routerConfig } from './login.router';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';

export let moduleName = 'loginModule';

angular.module(moduleName, [])
.config(routerConfig)
.controller('LoginController', LoginController)
.service('loginService', LoginService)