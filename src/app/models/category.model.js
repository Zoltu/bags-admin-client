export default function ($resource, baseParams) {
  'ngInject'

  let params = {
    name: '@name',
  };

  let model = $resource(
    baseParams.apiUrl + 'tag_categories/:id/:action/:actionTwo/:actionThree/:actionFour/',
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