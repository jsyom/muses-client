const data = require('../db.json');
const utils = require('../util');

/*
 * MOCK BACKEND for Products by Category API
 * -----------------------------------------
 * All products by All categories /api/products/by_category
 * All products by One category   /api/products/by_category?id=4
 *
 * following functions are to mock behavior of backend, and return expected data with response,
 * which should not be a code for real backend and not optimized.
 */

module.exports = (req, res) => {

  const defaultValues = {
    id: null
  };

  req.query = utils.setDefaultQueryStrings(req.query, defaultValues);
  console.log('QUERY | ', req.query);

  function createCategories() {

    function joinProducts(categories) {
      const products = data.products.map(product => Object.assign(product, {
          meta: data.products_meta.filter(meta => (meta.product_id === product.id))
        }));

      return categories.map(category => {
        category['products'] = data.products_categories
          .filter(row => (row.category_id === category.id))
          .map(row => (products.find(product => (product.id === row.product_id))));
        return category;
      })
    }

    const queryData = data.categories.filter(category => {
      // WHERE 'id' = req.query.id OR 'parent' = req.query.id
      if (req.query.id) {
        const id = Number(req.query.id);
        return category.id === id
          ? category.id === id : category.parent === id
            ? category.parent === id : false;
      }
      return true;
    });

    function getCategory(arr, parent) {
      const out = [];
      for(let i in arr) {
        if(arr[i].parent === parent) {
          const children = getCategory(arr, arr[i].id);

          if(children.length) {
            arr[i].children = children;
          }
          out.push(arr[i]);
        }
      }
      return out
    }

    const categories = getCategory(joinProducts(queryData), req.query.id ? Number(req.query.id) : 0);
    const category = queryData.find(row => row.id === Number(req.query.id));
    return Object.assign((category ? category : {id: 0, label: 'root'}), {children: categories});
  }

  res.jsonp(createCategories())
}
