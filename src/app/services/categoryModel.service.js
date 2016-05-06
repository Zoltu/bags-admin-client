export class CategoryModelService {
  constructor ($q, categoryModel) {
    'ngInject'

    this.$q = $q;
    this.Model = categoryModel;

    this.vocabluary = []
  }

  getVocabluary(){
    if(this.vocabluary.length){
      return this.$q.when(this.vocabluary);
    }

    return this.Model.query().$promise
    .then((res)=>{
      angular.copy(res, this.vocabluary);
      return this.vocabluary;
    });
  }
}
