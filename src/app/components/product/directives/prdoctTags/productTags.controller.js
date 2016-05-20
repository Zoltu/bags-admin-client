var pendingSearch, cancelSearch = angular.noop;
var cachedQuery, lastSearch;
export class ProductTagsController {

  constructor(lodash, $scope, tagModelService) {
    'ngInject'

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
    return criteria ? this.collections.tags.filter(this.createFilterFor(criteria)) : [];
  }

  createFilterFor(query) {
    var lowercaseQuery = angular.lowercase(query);

    return function filterFn(contact) {
      return (contact.name.indexOf(lowercaseQuery) != -1);
    };

  }

  getTags() {
    this.tagModelService.getCollection().then((res)=> {
      res = res.map((el)=> {
        el.name = `${el.category.name}:${el.name}`;
        return el;
      });
      this.collections.tags = res;

      // this.allContacts = this.collections.tags;
      // this.contacts = [this.collections.tags[0]];

      return this.tags;
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