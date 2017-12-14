const data = require('../db.json');
const utils = require('../util');

module.exports = function ProductAPI () {
  this.getAll = (req, res) => {
    // // query strings are for filter
    // // we might not use id was accepted parameter but just for testing
    // console.log('QUERY | ', req.query);
    // const queryData = data.products.filter(product => {
    //   if (req.query.id) {
    //     const id = Number(req.query.id);
    //     return product.id === id;
    //   }
    //   return true;
    // });
    //
    // const products = queryData.map(product => {
    //   return Object.assign(product, {
    //     meta: data.products_meta.filter(meta => (meta.product_id === product.id))
    //   });
    // });
    res.jsonp(data.products_api)
  };

  this.getOne = (req, res) => {
    // const product = data.products.find(product => (product.id === Number(req.params.id)));
    // const productWithMeta = Object.assign(product, {
    //   meta: data.products_meta.filter(meta => (meta.product_id === product.id))
    // });
    res.jsonp(data.products_api.find(product => (product.id === Number(req.params.id))))
  };
}
