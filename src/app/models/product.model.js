export default function ($resource, baseParams) {
  'ngInject'

  let params = {
    name: '@name',
    category_id: '@category_id',
  };

  let model = $resource(
    baseParams.apiUrl + 'products/:product_id/:subAction/:deleted_tag_id/:id/:action/:actionTwo/:actionThree/:actionFour/',
    {id: '@id', action: '@action', actionTwo: '@actionTwo'},
    {
      query: {
        params: {
          subAction: 'by_tags',
          products_per_page: 5,
          // tag_id: '@tag_id'
        },
        isArray:true,
      },
      save: {
        method: 'PUT',
        // params: params
      },
      saveAmazon: {
        method: 'PUT',
        params: {
          action: 'amazon',
        }
      },
      update: {
        method: 'PUT',
        // params: params
      },
      saveImage: {
        method: 'PUT',
        params: {
          product_id: '@product_id',
          subAction: 'image_url'
        }
      },
      deleteImage: {
        method: 'DELETE',
        params: {
          product_id: '@product_id',
          subAction: 'image_url'
        }
      },
      saveUrl: {
        method: 'PUT',
        params: {
          product_id: '@product_id',
          subAction: 'purchase_url'
        }
      },
      deleteUrl: {
        method: 'DELETE',
        params: {
          product_id: '@product_id',
          subAction: 'purchase_url'
        }
      },
      saveTag: {
        method: 'PUT',
        params: {
          product_id: '@product_id',
          subAction: 'tag'
        }
      },
      deleteTag: {
        method: 'DELETE',
        params: {
          product_id: '@product_id',
          tag_id: '@deleted_tag_id',
          subAction: 'tag'
        }
      },
    }
  );

  return model;
}