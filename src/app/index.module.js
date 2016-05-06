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
  tagModuleName,
  categoryModuleName,
  productModuleName
])
.constant('malarkey', malarkey)
.constant('moment', moment)
.config(config)
.config(routerConfig)
.run(runBlock)
.service('githubContributor', GithubContributorService)
.service('webDevTec', WebDevTecService)
.controller('MainController', MainController)
.directive('acmeNavbar', NavbarDirective)
.directive('acmeMalarkey', MalarkeyDirective)
.component('sidebarMenu', SidebarMenuComponent);
