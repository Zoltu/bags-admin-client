export class TagModelService {
  constructor ($q, tagModel) {
    'ngInject'

    this.$q = $q;
    this.Model = tagModel;

    this.vocabluary = [];
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
