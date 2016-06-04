import {ModalController} from './modalController'
import {CreateByAsinController} from './createByAsinController'

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

  modalCreateByAsin() {
    return this.modalService.show({
      templateUrl: 'app/components/product/createByAsin.html',
      controller: CreateByAsinController
    })
    .catch(console.log.bind(console));
  }
}
