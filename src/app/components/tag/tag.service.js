import {ModalController} from './modalController'

export class TagService {
  constructor (modalService) {
    'ngInject'

    this.modalService = modalService;
  }

  modal(data) {
    return this.modalService.show({
      templateUrl: 'app/components/tag/createOrUpdate.html',
      locals: {prefillingData: data},
      controller: ModalController
    })
    .catch(console.log.bind(console));
  }
}
