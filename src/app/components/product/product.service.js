import {ModalController} from './modalController'

export class ProductService {
  constructor (modalService) {
    'ngInject'

    this.modalService = modalService;
  }

  modal(data) {
    return this.modalService.show({
      templateUrl: 'app/components/product/createOrUpdate.html',
      locals: {prefillingData: data},
      controller: ModalController
    })
    .catch(console.log.bind(console));
  }
}
