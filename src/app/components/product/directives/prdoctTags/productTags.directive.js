import {ProductTagsController} from './productTags.controller'
export let ProductTagsDirective = {
  templateUrl: 'app/components/product/directives/prdoctTags/productTags.html',
  bindings: {
    tags: '=',
    removedTags: '=',
    addedTags: '=',
  },
  controllerAs: 'vm',
  controller: ProductTagsController
};