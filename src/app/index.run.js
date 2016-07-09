export function runBlock ($rootScope, loginService, localStorageService, $state) {
  'ngInject';

  $rootScope.$on('$stateChangeStart', function (event, next) {
    let token = _.get(localStorageService.get('auth'), 'token');
    if(next.name != 'main' && !token){
      event.preventDefault();
      $state.go('main');

      loginService.login()
      .then((res)=>{
        $state.go(next.name);
        return res;
      })
    }
  });

}
