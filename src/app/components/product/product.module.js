import { routerConfig } from './product.router';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { ProductUrlsDirective } from './directives/prdoctUrls/productUrls.directive';
import { ProductTagsDirective } from './directives/prdoctTags/productTags.directive';


export let moduleName = 'productModule';

angular.module(moduleName, [])
.config(routerConfig)
.controller('ProductController', ProductController)
.service('productService', ProductService)
.component('productUrls', ProductUrlsDirective)
.component('productTags', ProductTagsDirective)