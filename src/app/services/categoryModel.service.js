export class CategoryModelService {
  constructor ($q, lodash, modalService, categoryModel, $mdDialog) {
    'ngInject'

    this.$mdDialog = $mdDialog;
    this.$q = $q;
    this.lodash = lodash;
    this.modalService = modalService;
    this.Model = categoryModel;

    this.collection = []
  }

  getCollection(params){
    // params = params || {};
    // if(params.showCachedData && this.collection){
    //   return this.$q(this.collection);
    // }

    return this.Model.query().$promise
    .then((res)=>{
      angular.copy(res, this.collection);
      return this.collection;
    });
  }

  save(data) {
    let action = data.id ? 'update' : 'save';
    angular.extend(data, {
      actionId: data.id,
    });

    return this.Model[action](data).$promise
    .then((response) => {
      if (action == 'save') {
        this.collection.push(response);
      }

      return response;
    });
  }

  remove(data){
    if(this.lodash.isEmpty(data)){
      return this.$q.reject(false);
    }

    let confirm = this.$mdDialog.confirm()
    .title('Would you like to delete your category?')
    .ok('YES')
    .cancel('NO');

    this.$mdDialog.show(confirm)
    .then(() => {
      return this.Model.delete(data).$promise.then((response) => {
        this.lodash.remove(this.collection, {id: data.id});
        return response;
      });
    });
  }
}
