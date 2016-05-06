export class CategoryModelService {
  constructor ($q, categoryModel) {
    'ngInject'

    this.$q = $q;
    this.Model = categoryModel;

    this.vocabluary = [
      {
        _index: 1,
        id: "1703e6062b2c4c3b-ef15-08d37594f279",
        name: 'category 1'
      },
      {
        _index: 2,
        id: "21744403asdasdac4c3b-ef1537594f279",
        name: 'category 2'
      },
      {
        _index: 3,
        id: "31111703easd23ad823459ads2422af279",
        name: 'category 3'
      },
      {
        _index: 4,
        id: "41733312303e6062bdfghdghdfh2c4f279",
        name: 'category 4'
      },
      {
        _index: 5,
        id: "5111231703e6062b2c4c3b-ef15-94f279",
        name: 'category 5'
      },
      {
        _index: 6,
        id: "6111231703e6062b2c4c3b-ef15-94f279",
        name: 'category 6'
      },
      {
        _index: 7,
        id: "7111231703e6062b2c4c3b-ef15-94f279",
        name: 'category 7'
      },
      {
        _index: 8,
        id: "8111231703e6062b2c4c3b-ef15-94f279",
        name: 'category 8'
      },
      {
        _index: 9,
        id: "9111231703e6062b2c4c3b-ef15-94f279",
        name: 'category 9'
      },
      {
        _index: 10,
        id: "1011231703e6062b2c4c3b-ef15-94f279",
        name: 'category 10'
      },
      {
        _index: 11,
        id: "11gjkyu686686062b2c4c3b-ef15-94f279",
        name: 'category 11'
      },
    ]
  }

  getVocabluary(){
    if(this.vocabluary.length){
      return this.$q.when(this.vocabluary);
    }

    return this.Model.query().$promise
    .then((res)=>{
      angular.copy(res, this.vocabluary);
      return this.vocabluary;
    });
  }
}
