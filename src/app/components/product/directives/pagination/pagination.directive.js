import {PaginationsController} from './pagination.controller'
export let PaginationDirective = {
  templateUrl: 'app/components/product/directives/pagination/pagination.html',
  bindings: {
    data: '=',
    limit: '=',
    limitOptions: '=',
    page: '=',
    tags: '=',
  },
  controllerAs: 'vm',
  controller: PaginationsController
};