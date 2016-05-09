import { routerConfig } from './category.router';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';

export let moduleName = 'categoryModule';

angular.module(moduleName, [])
.config(routerConfig)
.controller('CategoryController', CategoryController)
.service('categoryService', CategoryService)