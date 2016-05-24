export class LoginService {
  constructor ($q, GooglePlus) {
    'ngInject'

    this.$q = $q;
    this.GooglePlus = GooglePlus;
  }

  login(){
    return this.$q((resolve, reject)=>{
      var interval = setInterval(()=>{
        if(gapi.auth){

          this.GooglePlus.login().then((authResult) => {
            resolve(authResult);
            // this.GooglePlus.getUser().then((user)=>{
            //   console.log('google user', user);
            // });
          }, function (err) {
            reject(err);
          });
          clearInterval(interval);
        }
      },2000);
    })
  }
}
