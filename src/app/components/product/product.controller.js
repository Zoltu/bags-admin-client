export class ProductController {
  constructor (productModelService, productService, lodash) {
    'ngInject';

    this.lodash = lodash;
    this.productModelService = productModelService;
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
  }

  getProducts(){
    this.productModelService.getCollection().then((res)=>{
      this.data = res;
      return this.data;
    }).catch(console.log.bind(console));
  }

  remove(data) {
    this.productModelService.remove(data);
  }

  modalCreateOrUpdate(data) {
    this.productService.modal(data)
    .then((res)=>{
      this.getProducts();
    })
    .catch(console.log.bind(console));
  }

}
