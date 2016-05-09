export default function ($resource, baseParams) {
  'ngInject'

  let params = {
    name: '@name',
    category_id: '@category_id',
  };

  let model = $resource(
    baseParams.apiUrl + 'tags/:id/:action/:actionTwo/:actionThree/:actionFour/',
    {id: '@id', action: '@action', actionTwo: '@actionTwo'},
    {
      save: {
        method: 'PUT',
        params: params
      },
      update: {
        method: 'PUT',
        params: params
      }
    }
  );

  return model;
}