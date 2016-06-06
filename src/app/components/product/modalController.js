export class ModalController {
  constructor(lodash, $mdDialog, productModelService, $q) {
    'ngInject'

    this.$q = $q;
    this.productModelService = productModelService;
    this.$mdDialog = $mdDialog;
    this.lodash = lodash;

    this.onInit();
  }

  onInit() {
    this.formData = {};
    this.prefillingData = this.prefillingData || {};

    this.added = {
      images: []
    };
    this.removed = {
      images: []
    };
    this.collections = {
      tags: []
    };
    this.selected = {
      tag: null
    };

    this.preFillingData();
  }

  preFillingData() {
    this.prefillingData.tags = this.prefillingData.tags || [];
    this.lodash.map(this.lodash.get(this.prefillingData, 'tags'), (el)=> {
      el.fullName = `${el.category.name}:${el.name}`;
      return el;
    });
    angular.extend(this.formData, this.prefillingData);
  }

  save() {
    if (this.formSave.$invalid) {
      return;
    }

    this.disabled = true;
    this.formData.tag_id = this.lodash.get(this.selected.tag, 'id');

    return this.productModelService.save(this.formData)
    // .then(this.saveImages.bind(this))
    // .then(this.saveUrls.bind(this))
    .then(this.saveTags.bind(this))
    // .then(this.removeImages.bind(this))
    // .then(this.removeUrls.bind(this))
    .then(this.removeTags.bind(this))
    .then((response) => {
      this.lodash.merge(this.prefillingData, response);
      // hide modal
      this.$mdDialog.hide(response);
      this.disabled = false;

      return response;
    })
  }

  saveImages(res) {
    let pImages = [this.$q.when(res)];
    angular.forEach(this.added.images, (el)=> {
      let data = {
        product_id: res.id,
        uri: el
      };
      let pImage = this.productModelService.saveImage(data);
      pImages.unshift(pImage);
    });

    return this.$q.all(pImages).then((res)=> {
      return res[0];
    });
  }

  removeImages(res) {
    let pImages = [];
    angular.forEach(this.removed.images, (el)=> {
      let data = {
        product_id: res.id,
        action: el
      };
      let pImage = this.productModelService.removeImage(data);
      pImages.unshift(pImage);
    });

    return this.$q.all(pImages);
  }

  saveUrls(res) {
    let pUrls = [this.$q.when(res)];
    angular.forEach(this.added.urls, (el)=> {
      let data = {
        product_id: res.id,
        uri: el
      };
      let pUrl = this.productModelService.saveUrl(data);
      pUrls.unshift(pUrl);
    });

    return this.$q.all(pUrls).then((res)=> {
      return res[0];
    });
  }

  removeUrls(res) {
    let pUrls = [];
    angular.forEach(this.removed.images, (el)=> {
      let data = {
        product_id: res.id,
        action: el
      };
      let pUrl = this.productModelService.removeUrl(data);
      pUrls.unshift(pUrl);
    });

    return this.$q.all(pUrls);
  }

  saveTags(res) {
    let pTags = [this.$q.when(res)];
    angular.forEach(this.added.tags, (el)=> {
      let data = {
        product_id: res.id,
        tag_id: el.id
      };
      let pTag = this.productModelService.saveTag(data)
      .then((pTagRes)=>{
        var newTag = this.lodash.find(pTagRes.tags, {id: data.tag_id});
        res.tags.push(newTag);
        return res;
      });
      pTags.unshift(pTag);
    });

    return this.$q.all(pTags).then(()=> {
      return res;
    });
  }

  removeTags(res) {
    let pTags = [];
    angular.forEach(this.removed.tags, (el)=> {
      let data = {
        product_id: res.id,
        tag_id: el.id
      };
      let pTag = this.productModelService.removeTag(data)
      .then(()=>{
        return this.lodash.remove(res.tags, {id: data.tag_id});
      });
      pTags.unshift(pTag);
    });

    return this.$q.all(pTags).then(()=> {
      return res;
    });
  }

  close() {
    this.$mdDialog.cancel();
  }

}