import {ModalController} from './modalController'

export class CategoryService {
  constructor (modalService) {
    'ngInject'

    this.modalService = modalService;
  }

  modal(data) {
    return this.modalService.show({
      templateUrl: 'app/components/category/createOrUpdate.html',
      locals: {prefillingData: data},
      controller: ModalController
    })
    .catch(console.log.bind(console));
  }
}
