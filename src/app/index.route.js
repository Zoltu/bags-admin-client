export function routerConfig ($stateProvider, $urlRouterProvider, $locationProvider) {
  'ngInject';
  $stateProvider
    .state('main', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'vm'
    });

  $urlRouterProvider.otherwise('/');
  // use the HTML5 History API
  $locationProvider.html5Mode(true);
}
