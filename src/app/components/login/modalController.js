export class ModalController{
  constructor(lodash, $mdDialog, loginModelService, categoryModelService) {
    'ngInject'

    this.categoryModelService = categoryModelService;
    this.loginModelService = loginModelService;
    this.$mdDialog = $mdDialog;
    this.lodash = lodash;

    this.onInit();
  }

  onInit(){
    this.formData = {};

    this.collections = {
      categories: []
    }
    this.selected = {
      category: null
    };


    this.preFillingData();
    this.getCategories();
  }

  getCategories(){
    this.categoryModelService.getCollection().then((res)=>{
      this.collections.categories = res;
      return this.categories;
    }).catch(console.log.bind(console));
  }

  preFillingData(){
    this.selected.category = this.lodash.get(this.prefillingData, 'category');
    angular.extend(this.formData, this.prefillingData);
  }

  save(){
    if(this.formSave.$invalid){
      return;
    }

    this.formData.category_id = this.lodash.get(this.selected.category, 'id');

    this.loginModelService.save(this.formData)
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