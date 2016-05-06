import { routerConfig } from './category.router';
import { CategoryController } from './category.controller';

export let moduleName = 'categoryModule';

angular.module(moduleName, [])
.config(routerConfig)
.controller('CategoryController', CategoryController)