export function routerConfig ($stateProvider) {
  'ngInject';
  
  $stateProvider
  .state('login', {
    parent: 'main',
    url: 'login',
    templateUrl: 'app/components/login/login.html',
    controller: 'LoginController',
    controllerAs: 'vm'
  });
}
