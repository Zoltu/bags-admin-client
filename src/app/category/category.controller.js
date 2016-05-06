export class CategoryController {
  constructor (categoryModelService) {
    'ngInject';

    categoryModelService.getVocabluary();

    this.onInit();
  }

  onInit(){
    
  }
}
