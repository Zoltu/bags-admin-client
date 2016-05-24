export class LoginController {
  constructor (GooglePlus) {
    'ngInject';

    this.GooglePlus = GooglePlus;
    // this.$auth.authenticate('google');

    this.login();
  }

  login(){
    var interval = setInterval(()=>{
      if(gapi.auth){
        this.GooglePlus.login().then((authResult) => {
          console.log('authResult', authResult);

          this.GooglePlus.getUser().then((user)=>{
            console.log('google user', user);
          });
        }, function (err) {
          console.log(err);
        });

        clearInterval(interval);
      }
    },100);
  }

  onInit(){
    console.log(location);
  }

}
