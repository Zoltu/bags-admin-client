export class ProductTagsController {

  constructor(lodash, $scope, tagModelService, $filter) {
    'ngInject'

    this.$filter = $filter;
    this.$scope = $scope;
    this.lodash = lodash;
    this.tagModelService = tagModelService;
  }

  $onInit() {
    this.collections = [];
    this.saveTags = angular.copy(this.tags);
    this.data = this.tags || [];
    this.addedTags = this.addedTags || [];
    this.removedTags = this.removedTags || [];

    this.$scope.$watchCollection("vm.data", this.watchData.bind(this));

    this.getTags();
  }

  querySearch(criteria) {
    return criteria ? this.$filter('fuzzyBy')(this.collections.tags, 'fullName', criteria) : [];
  }

  getTags() {
    this.tagModelService.getCollection()
    .then((res)=> {
      this.collections.tags = res;
      return this.collections.tags
    }).catch(console.log.bind(console));
  }

  watchData(newval, oldval) {
    this.checkDifference();
  }

  checkDifference() {
    this.addedTags = this.lodash.differenceBy(this.data, this.saveTags, 'id');
    this.addedTags = this.lodash.uniqBy(this.addedTags, 'id');

    this.removedTags = this.lodash.differenceBy(this.saveTags, this.data, 'id');
    this.removedTags = this.lodash.uniqBy(this.removedTags, 'id');
  }
}