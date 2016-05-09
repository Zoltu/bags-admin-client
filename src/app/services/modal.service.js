export class ModalService {
  constructor ($mdDialog) {
    'ngInject'

    this.$mdDialog = $mdDialog;
  }

  show(params) {
    var params = angular.extend({
      clickOutsideToClose: true,
      controllerAs: 'vm',
      bindToController: true,
    }, params);

    return this.$mdDialog.show(params);
  }
}
