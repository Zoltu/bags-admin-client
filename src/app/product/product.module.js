import { routerConfig } from './product.router';
import { ProductController } from './product.controller';

export let moduleName = 'productModule';

angular.module(moduleName, [])
.config(routerConfig)
.controller('ProductController', ProductController)