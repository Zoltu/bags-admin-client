export class CreateByAsinController {
  constructor(lodash, $mdDialog, productModelService, $q) {
    'ngInject'

    this.$q = $q;
    this.productModelService = productModelService;
    this.$mdDialog = $mdDialog;
    this.lodash = lodash;

    this.onInit();
  }

  onInit() {
    this.formData = {};
  }

  save() {
    if (this.formSave.$invalid) {
      return;
    }
    this.disabled = true;

    return this.productModelService.saveAmazon(this.formData)
    .then((response) => {
      this.$mdDialog.hide(response);
      this.disabled = false;

      return response;
    })
  }

  close() {
    this.$mdDialog.cancel();
  }

}