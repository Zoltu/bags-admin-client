export class ModalController{
  constructor(lodash, $mdDialog, categoryModelService) {
    'ngInject'

    this.categoryModelService = categoryModelService;
    this.$mdDialog = $mdDialog;
    this.lodash = lodash;

    this.onInit();
  }

  onInit(){
    this.formData = {};

    this.preFillingData();
  }
  
  preFillingData(){
    angular.extend(this.formData, this.prefillingData);
  }

  save(){
    if(this.formSave.$invalid){
      return;
    }

    this.categoryModelService.save(this.formData)
    .then((response) => {
      this.lodash.merge(this.prefillingData, response);

      // hide modal
      this.$mdDialog.hide(this.prefillingData);
    });
  }
  
  close(){
    this.$mdDialog.cancel();
  }

}