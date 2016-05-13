export class TagController {
  constructor (tagModelService, tagService) {
    'ngInject';

    this.tagModelService = tagModelService;
    this.tagService = tagService;

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

    this.getTags();
  }

  getTags(){
    this.tagModelService.getCollection().then((res)=>{
      this.data = res;
      return this.data;
    }).catch(console.log.bind(console));
  }

  remove(data) {
    this.tagModelService.remove(data);
  }

  modalCreateOrUpdate(data) {
    this.tagService.modal(data)
    .catch(console.log.bind(console));
  }

}
