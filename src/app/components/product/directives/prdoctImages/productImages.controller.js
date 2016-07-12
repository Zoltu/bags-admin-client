export class ProductImagesController {

  constructor(lodash, $scope) {
    'ngInject'

    this.$scope = $scope;
    this.lodash = lodash;
  }

  $onInit() {
    this.show = false;
    this.selected = [];
    this.data = this.urls || [];
  }

  populateImage(img){
    return {
      large: img.large || "http://placehold.it/500x250",
      medium: img.medium || "http://placehold.it/250x125",
      small: img.small || "http://placehold.it/125x60",
      priority: img.priority || 0
    }
  }
  create() {
    if (!this.image) {
      return;
    }

    this.image = this.populateImage(this.image)
    this.data.push(this.image);

    angular.copy(
      this.lodash.orderBy(this.data, ['priority'], ['asc']),
      this.data
    );
    delete this.image;
  }

  remove(index) {
    this.lodash.remove(this.data, function(n, i) {
      return index == i;
    });
  }

  edit(index) {
    this.editItem = {
      data: angular.copy(this.data[index]),
      index: index
    };

    this.image = this.editItem.data;
  }

  update() {
    if (!this.image) {
      return;
    }

    this.data[this.editItem.index] = this.image;
    angular.copy(
      this.lodash.orderBy(this.data, ['priority'], ['asc']),
      this.data
    );

    this.cancelUpdate()
  }

  cancelUpdate() {
    delete this.editItem;
    delete this.image;
  }
}