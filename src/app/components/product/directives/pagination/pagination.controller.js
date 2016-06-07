export class PaginationsController {

  constructor(lodash, $scope, productModelService) {
    'ngInject'

    this.$scope = $scope;
    this.lodash = lodash;
    this.productModelService = productModelService;
  }

  $onInit() {
  }

  prev(){
    let params = {
      products_per_page: this.limit,
      starting_product_id: (this.page - 1) * this.limit - this.limit
    };
    this.getProducts(params)
    .then((res)=>{
      this.page--;
      return res;
    })
  }

  next(){
    let params = {
      products_per_page: this.limit,
      starting_product_id: (this.page + 1) * this.limit - this.limit
    };
    this.getProducts(params)
    .then((res)=>{
      this.page++;
      return res;
    })
  }

  changeLimit(){
    let params = {
      products_per_page: this.limit,
      starting_product_id: this.page * this.limit - this.limit
    };
    this.getProducts(params);
  }


  getProducts(params){
    return this.productModelService.getCollection(params)
    .catch(console.log.bind(console));
  }
}