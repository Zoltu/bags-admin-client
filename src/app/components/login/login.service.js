export class LoginService {
  constructor ($q, gapi) {
    'ngInject'

    this.$q = $q;
    this.gapi = gapi;
    this.scopes = 'profile';
    this.clientId = '867651060370-4oqj1vdb06deotdvek82riivej3q4pmk.apps.googleusercontent.com';
  }

  login(){
    return this.$q((resolve, reject)=>{
      var params = {
        client_id: this.clientId,
        scope: this.scopes,
        immediate: false
      };
      this.gapi.auth.authorize(params, (response)=>{
        resolve(response);
      });
    });
  }
}
