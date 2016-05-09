export function routerConfig ($stateProvider) {
  'ngInject';
  
  $stateProvider
  .state('tag', {
    parent: 'main',
    url: 'tag',
    templateUrl: 'app/components/tag/tag.html',
    controller: 'TagController',
    controllerAs: 'vm'
  });
}
