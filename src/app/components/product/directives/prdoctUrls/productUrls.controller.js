export class ProductUrlsController {

  constructor(lodash, $scope) {
    'ngInject'

    this.$scope = $scope;
    this.lodash = lodash;
  }

  $onInit() {
    this.selected = [];
    this.saveUrls = angular.copy(this.urls);
    this.data = this.urls || [];
    this.addedUrls = this.addedUrls || [];
    this.removedUrls = this.removedUrls || [];

    this.$scope.$watchCollection("vm.data", this.watchData.bind(this));
  }

  watchData(newval, oldval){
    this.checkDifference();
  }

  create() {
    if (!this.url) {
      return;
    }

    this.data.push(this.url);

    delete this.url;
  }

  remove(index) {
    this.lodash.remove(this.data, function(n, i) {
      return index == i;
    });
  }

  edit(index) {
    this.editItem = {
      url: this.data[index],
      index: index
    };

    this.url = this.editItem.url;
  }

  update() {
    if (!this.url) {
      return;
    }

    this.data[this.editItem.index] = this.url;
    this.cancelUpdate()
  }

  cancelUpdate() {
    delete this.editItem;
    delete this.url;
  }

  checkDifference(){
    this.addedUrls = this.lodash.difference(this.data, this.saveUrls);
    this.addedUrls = this.lodash.uniq(this.addedUrls);

    this.removedUrls = this.lodash.difference(this.saveUrls, this.data);
    this.removedUrls = this.lodash.uniq(this.removedUrls);
  }

  isImg(){
    return this.type == 'img';
  }
}