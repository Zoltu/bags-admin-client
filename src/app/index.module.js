/* global malarkey:false, moment:false */

import {config} from './index.config';
import {httpConfig} from './http.config';
import {routerConfig} from './index.route';
import {runBlock} from './index.run';
import {MainController} from './main/main.controller';
import {GithubContributorService} from '../app/components/githubContributor/githubContributor.service';
import {WebDevTecService} from '../app/components/webDevTec/webDevTec.service';
import {NavbarDirective} from '../app/components/navbar/navbar.directive';
import {MalarkeyDirective} from '../app/components/malarkey/malarkey.directive';
import {SidebarMenuComponent} from '../app/components/sidebarMenu/sidebarMenu.component';

// CONSTANTS //
import {
} from './constants';

// DECORATORS //
import {
  decorateSlickDirective,
  decorateMdAutocomplete,
} from './decorators';

// SERVICES //
import {
  ModalService,
  CategoryModelService,
  ProductModelService,
  TagModelService,
} from './services';
import {
 LoginService
} from './components/login/login.service';

// // DIRECTIVES //
import {
} from './directives/index';

// MODELS //
import {
  categoryModel,
  productModel,
  tagModel
} from './models/index';


// MODULES //
import {moduleName as tagModuleName} from './components/tag/index'
import {moduleName as categoryModuleName} from './components/category/index'
import {moduleName as productModuleName} from './components/product/index'
import {moduleName as loginModuleName} from './components/login/index'

angular.module('bags-app', [
  'envConst',
  'ngAnimate',
  'ngCookies',
  'ngTouch',
  'ngSanitize',
  'ngMessages',
  'ngAria',
  'ngResource',
  'ui.router',
  'ngMaterial',
  'toastr',
  'md.data.table',
  'ngLodash',
  'slick',
  'angular-loading-bar',
  'angular.filter',
  'LocalStorageModule',
  loginModuleName,
  tagModuleName,
  categoryModuleName,
  productModuleName
])
.constant('malarkey', malarkey)
.constant('moment', moment)
.constant('gapi', gapi)

.config(config)
.config(httpConfig)
.config(routerConfig)
.run(runBlock)

// DECORATORS
.config(decorateSlickDirective)
.config(decorateMdAutocomplete)

// SERVICES //
.service('modalService', ModalService)
.service('githubContributor', GithubContributorService)
.service('webDevTec', WebDevTecService)
.service('categoryModelService', CategoryModelService)
.service('productModelService', ProductModelService)
.service('tagModelService', TagModelService)
.service('loginService', LoginService)

// DIRECTIVES //
.directive('acmeNavbar', NavbarDirective)
.directive('acmeMalarkey', MalarkeyDirective)
.component('sidebarMenu', SidebarMenuComponent)

// MODELS //
.factory('categoryModel', categoryModel)
.factory('productModel', productModel)
.factory('tagModel', tagModel)

.controller('MainController', MainController)


