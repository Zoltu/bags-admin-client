import {ProductUrlsController} from './productUrls.controller'
export let ProductUrlsDirective = {
  templateUrl: 'app/components/product/directives/prdoctUrls/productUrls.html',
  bindings: {
    type: '@',
    label: '@',
    urls: '=',
    removedUrls: '=',
    addedUrls: '=',
  },
  controllerAs: 'vm',
  controller: ProductUrlsController
};