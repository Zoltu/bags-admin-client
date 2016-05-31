export function httpConfig($httpProvider) {
  'ngInject';

  $httpProvider.interceptors.push(Interceptor);
}

function Interceptor($q, localStorageService) {
  'ngInject';

  return {
    request: function (config) {
      if (config.url.search(/\/api\//) + 1) {
        config.headers.Authorization = localStorageService.get('auth') ? 'Bearer ' + localStorageService.get('auth').token : '';
      }
      return config;
    },
    requestError: function (rejection) {
      return $q.reject(rejection);
    },
    response: function (response) {
      return response;
    },
    responseError: function (rejection) {
      return $q.reject(rejection);
    }
  };
}