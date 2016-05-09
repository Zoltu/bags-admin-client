import { routerConfig } from './tag.router';
import { TagController } from './tag.controller';
import { TagService } from './tag.service';

export let moduleName = 'tagModule';

angular.module(moduleName, [])
.config(routerConfig)
.controller('TagController', TagController)
.service('tagService', TagService)