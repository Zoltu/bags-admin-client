export class LoginService {
  constructor($q, gapi) {
    'ngInject'

    this.$q = $q;
    this.gapi = gapi;
    this.scopes = 'profile';
    this.clientId = '867651060370-4oqj1vdb06deotdvek82riivej3q4pmk.apps.googleusercontent.com';
  }

  login() {
    return this.$q((resolve)=> {
      gapi.load('auth2', () => {
        let auth2 = gapi.auth2.init({
          client_id: this.clientId,
          fetch_basic_profile: false,
          scope: 'profile'
        });

        auth2.signIn().then((res) => {
          resolve(res.getAuthResponse().id_token);
        });
      });
    });
  }
}
