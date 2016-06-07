export class ProductController {
  constructor (productModelService, tagModelService, productService, lodash, $filter) {
    'ngInject';

    this.$filter = $filter;
    this.lodash = lodash;
    this.productModelService = productModelService;
    this.tagModelService = tagModelService;
    this.productService = productService;

    this.onInit();
  }

  onInit(){
    this.data = [];
    this.collections = {
      tags: []
    };
    this.categories = [];
    this.selected = {
      tags: []
    };
    this.gridOptions = {
      order: 'name',
      rowSelection: true,
      multiSelect: true,
      pageSelect: true,
      boundaryLinks: true,

      limitOptions: [5,10,20,50,100,200,500],
      limit: 5,
      page: 1,
    };

    this.getProducts();
    this.getTags();
  }

  getProducts(){
    this.productModelService.getCollection().then((res)=>{
      this.data = res;
      return this.data;
    }).catch(console.log.bind(console));
  }

  getTags() {
    this.tagModelService.getCollection({showCachedData: true})
    .then((res)=> {
      this.collections.tags = res;
      return this.collections.tags
    })
    .catch(console.log.bind(console));
  }

  querySearch(criteria) {
    return criteria ? this.$filter('fuzzyBy')(this.collections.tags, 'fullName', criteria) : [];
  }

  remove(data) {
    this.productModelService.remove(data);
  }

  modalCreateOrUpdate(data) {
    this.productService.modal(data)
    .then((res)=>{
      if(res){
        var index = this.lodash.findIndex(this.data, ['id', res.id]);
        this.data[index] = res;
      }
      return res;
    })
    .catch(console.log.bind(console));
  }

  modalCreateByAsin() {
    this.productService.modalCreateByAsin()
    .then((res)=>{
      if(!res){
        return false;
      }

      return this.productService.modal(res)
    })
    .catch(console.log.bind(console));
  }
}
