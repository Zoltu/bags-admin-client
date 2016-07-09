export class LoginService {
  constructor($q, gapi, $state, localStorageService, $interval) {
    'ngInject'

    // load auth2
    gapi.load('auth2');

    this.$interval = $interval;
    this.localStorageService = localStorageService;
    this.$state = $state;
    this.$q = $q;
    this.gapi = gapi;
    this.scopes = 'profile';
    this.clientId = '867651060370-4oqj1vdb06deotdvek82riivej3q4pmk.apps.googleusercontent.com';
  }

  login() {
    let auth2 = gapi.auth2.init({
      client_id: this.clientId,
      fetch_basic_profile: false,
      scope: 'profile'
    });

    return auth2.signIn().then((res) => {
      this.$interval(()=>{
        res.reloadAuthResponse()
        .then((res)=>{
          this.setToken(res);
        })
      }, 600000);

      return this.setToken(res);
    });
  }

  setToken(res){
    let token = res.getAuthResponse().id_token;
    this.localStorageService.set('auth', {token: token});
    return token;
  }
  
  logout(){
    this.localStorageService.set('auth', null);
    location.reload();
  }
}
