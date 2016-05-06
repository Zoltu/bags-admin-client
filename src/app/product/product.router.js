export function routerConfig ($stateProvider) {
  'ngInject';
  
  $stateProvider
  .state('product', {
    parent: 'main',
    url: 'product',
    templateUrl: 'app/product/product.html',
    controller: 'ProductController',
    controllerAs: 'vm'
  });
}
