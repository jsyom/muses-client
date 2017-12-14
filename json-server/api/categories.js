const data = require('../db.json');
const utils = require('../util');
const _ = require('lodash')
/*
 * MOCK BACKEND for Categories API
 * -------------------------------
 * All products by All categories /api/products/by_category
 * All products by One category   /api/products/by_category?id=4
 *
 * following functions are to mock behavior of backend, and return expected data with response,
 * which should not be a code for real backend and not optimized.
 */

module.exports = function CategoriesAPI () {

  this.makeTree = (arr, parent) => {
    const out = [];
    for(let i in arr) {
      if(arr[i].parent === parent) {
        const children = this.makeTree(arr, arr[i].id);

        if(children.length) {
          arr[i].children = children;
        }
        out.push(arr[i]);
      }
    }
    return out
  };
  this.getAll = (req, res) => {
    console.log('QUERY | ', req.params);
    const categories = this.makeTree(data.categories, 0);
    res.jsonp(categories)
  };

  this.getOne = (req, res) => {

    // const defaultValues = {
    //   id: false
    // };
    // req.query = utils.setDefaultQueryStrings(req.query, defaultValues);
    console.log('PARAMS | ', req.params);

    const queryData = data.categories.filter(category => {
      // WHERE 'id' = req.query.id OR 'parent' = req.query.id
      if (req.params.id) {
        const id = Number(req.params.id);
        return category.id === id || category.parent === id;
      }
      return true;
    });


    const categories = this.makeTree(queryData, req.params.id ? Number(req.params.id) : 0);
    const category = queryData.find(row => row.id === Number(req.params.id));
    const output = Object.assign((category ? category : {id: 0, label: 'root'}), {children: categories});
    res.jsonp(output)
  }

}
