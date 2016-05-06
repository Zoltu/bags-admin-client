export class CategoryController {
  constructor (categoryModelService) {
    'ngInject';

    this.categoryModelService = categoryModelService;

    this.onInit();
  }

  onInit(){
    this.data = [];
    this.selected = [];
    this.gridOptions = {
      order: 'name',
      rowSelection: true,
      multiSelect: true,
      pageSelect: true,
      boundaryLinks: true,

      limitOptions: [5,10,15],
      limit: 5,
      page: 1,
    };

    this.getCategory();
  }
  
  getCategory(){
    this.categoryModelService.getVocabluary().then((res)=>{
      this.data = res;
      return this.data;
    }).catch(console.log.bind(console));
  }
}
