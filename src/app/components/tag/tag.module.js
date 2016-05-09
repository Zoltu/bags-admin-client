import { routerConfig } from './tag.router';
import { TagController } from './tag.controller';

export let moduleName = 'tagModule';

angular.module(moduleName, [])
.config(routerConfig)
.controller('TagController', TagController)