/* global malarkey:false, moment:false */

import {config} from './index.config';
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
  baseParams
} from './constants';

// MODELS //
import {
  categoryModel,
  productModel,
  tagModel
} from './models/index';

// SERVICES //
import {
  CategoryModelService,
  ProductModelService,
  TagModelService,
} from './services';

// MODULES //
import {moduleName as tagModuleName} from './tag/index'
import {moduleName as categoryModuleName} from './category/index'
import {moduleName as productModuleName} from './product/index'

angular.module('bags-app', [
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
  tagModuleName,
  categoryModuleName,
  productModuleName
])
.constant('baseParams', baseParams)
.constant('malarkey', malarkey)
.constant('moment', moment)
.config(config)
.config(routerConfig)
.run(runBlock)

.controller('MainController', MainController)
.directive('acmeNavbar', NavbarDirective)
.directive('acmeMalarkey', MalarkeyDirective)
.component('sidebarMenu', SidebarMenuComponent)

// MODELS //
.factory('categoryModel', categoryModel)
.factory('productModel', productModel)
.factory('tagModel', tagModel)

// SERVICES //
.service('githubContributor', GithubContributorService)
.service('webDevTec', WebDevTecService)
.service('categoryModelService', CategoryModelService)
.service('productModelService', ProductModelService)
.service('tagModelService', TagModelService)
