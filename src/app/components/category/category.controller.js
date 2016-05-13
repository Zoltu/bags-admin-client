export class CategoryController {
  constructor (categoryModelService, categoryService) {
    'ngInject';

    this.categoryModelService = categoryModelService;
    this.categoryService = categoryService;

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
      limit: 10000,
      page: 1,
    };

    this.getCategories();
  }

  getCategories(){
    this.categoryModelService.getCollection().then((res)=>{
      this.data = res;
      return this.data;
    }).catch(console.log.bind(console));
  }

  remove(data) {
    this.categoryModelService.remove(data);
  }

  modalCreateOrUpdate(data) {
    this.categoryService.modal(data)
    .catch(console.log.bind(console));
  }

}
