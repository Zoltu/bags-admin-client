export function runBlock ($rootScope, loginService, localStorageService, $state) {
  'ngInject';

  $rootScope.$on('$stateChangeStart', function (event, next) {
    let token = _.get(localStorageService.get('auth'), 'token');
    if(next.name != 'main' && !token){
      event.preventDefault();
      $state.go('main');

      loginService.login()
      .then((res)=>{
        localStorageService.set('auth', {token: res.access_token});
        $state.go(next.name);
      }).catch((err)=>{
        console.log('login error', res);
      });
    }
  });

}
