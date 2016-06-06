export class ProductController {
  constructor (productModelService, tagModelService, productService, lodash) {
    'ngInject';

    this.lodash = lodash;
    this.productModelService = productModelService;
    this.tagModelService = tagModelService;
    this.productService = productService;

    this.onInit();
  }

  onInit(){
    this.data = [];
    this.categories = [];
    this.selected = [];
    this.gridOptions = {
      order: 'name',
      rowSelection: true,
      multiSelect: true,
      pageSelect: true,
      boundaryLinks: true,

      limitOptions: [5,10,15],
      limit: 10000,
      page: 1,
    };

    this.getProducts();
    this.getTags();
  }

  getProducts(){
    this.productModelService.getCollection().then((res)=>{
      // angular.forEach(res, (prod)=>{
      //   prod.tags = prod.tags.map((el)=>{
      //     el.name = `${el.category.name}:${el.name}`;
      //     return el;
      //   });
      // });
      this.data = res;
      return this.data;
    }).catch(console.log.bind(console));
  }

  getTags() {
    this.tagModelService.getCollection({showCachedData: true})
    .catch(console.log.bind(console));
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
