export class ProductModelService {
  constructor ($q, productModel) {
    'ngInject'

    this.$q = $q;
    this.Model = productModel;

    this.vocabluary = [];
  }

  getVocabluary(){
    return this.Model.query().$promise
    .then((res)=>{
      angular.copy(res, this.vocabluary);
      return this.vocabluary;
    });
  }
}
