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
    this.data = angular.copy(this.tags) || [];
    this.addedTags = this.addedTags || [];
    this.removedTags = this.removedTags || [];

    this.$scope.$watchCollection("vm.data", this.watchData.bind(this));

    this.getTags();
  }

  querySearch(criteria) {
    var tags = this.$filter('fuzzyBy')(this.collections.tags, 'fullName', criteria);
    return tags;
  }

  getTags() {
    this.tagModelService.getCollection({showCachedData: true})
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