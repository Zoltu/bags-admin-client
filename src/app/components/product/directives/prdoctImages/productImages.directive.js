import {ProductImagesController} from './productImages.controller'
export let ProductImagesDirective = {
  templateUrl: 'app/components/product/directives/prdoctImages/productImages.html',
  bindings: {
    type: '@',
    label: '@',
    urls: '=',
    removedUrls: '=',
    addedUrls: '=',
  },
  controllerAs: 'vm',
  controller: ProductImagesController
};