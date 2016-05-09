export class ProductModelService {
  constructor ($q, lodash, modalService, productModel, $mdDialog) {
    'ngInject'

    this.$mdDialog = $mdDialog;
    this.$q = $q;
    this.lodash = lodash;
    this.modalService = modalService;
    this.Model = productModel;

    this.collection = []
  }

  getCollection(){
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
    .title('Would you like to delete your product?')
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

  saveImage(data) {
    return this.Model.saveImage(data).$promise
    .then((response) => {
      return response;
    });
  }

  removeImage(data){
    return this.Model.deleteImage(data).$promise
    .then((response) => {
      return response;
    });
  }

  saveUrl(data) {
    return this.Model.saveUrl(data).$promise
    .then((response) => {
      return response;
    });
  }

  removeUrl(data){
    return this.Model.deleteUrl(data).$promise
    .then((response) => {
      return response;
    });
  }

  saveTag(data) {
    return this.Model.saveTag(data).$promise
    .then((response) => {
      return response;
    });
  }

  removeTag(data){
    return this.Model.deleteTag(data).$promise
    .then((response) => {
      return response;
    });
  }
}
