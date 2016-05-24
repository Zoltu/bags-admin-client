export function config($logProvider, toastrConfig, $mdThemingProvider, cfpLoadingBarProvider, GooglePlusProvider, localStorageServiceProvider) {
  'ngInject';
  // Enable log
  $logProvider.debugEnabled(true);

  // Set options third-party lib
  toastrConfig.allowHtml = true;
  toastrConfig.timeOut = 3000;
  toastrConfig.positionClass = 'toast-top-right';
  toastrConfig.preventDuplicates = true;
  toastrConfig.progressBar = true;

  // Material Theming
  $mdThemingProvider.theme('default')
  .primaryPalette('blue-grey');

  // Load Bar
  cfpLoadingBarProvider.includeSpinner = false;

  // Google+
  GooglePlusProvider.init({
    clientId: '867651060370-4oqj1vdb06deotdvek82riivej3q4pmk.apps.googleusercontent.com'
  });

  localStorageServiceProvider.setPrefix('bagsApp');
}
