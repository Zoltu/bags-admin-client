export function routerConfig ($stateProvider) {
  'ngInject';
  
  $stateProvider
  .state('category', {
    parent: 'main',
    url: 'category',
    templateUrl: 'app/category/category.html',
    controller: 'CategoryController',
    controllerAs: 'vm'
  });
}
