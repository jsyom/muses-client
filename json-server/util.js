module.exports = {
  setDefaultQueryStrings: (query, defaultValueObject) => {
    let newQuery = Object.assign({}, query);
    if (!Object.keys(newQuery).length) {
      newQuery = defaultValueObject
    } else {
      Object.keys(defaultValueObject).forEach(key => {
        if (!newQuery[key]) {
          newQuery[key] = defaultValueObject[key];
        }
      })
    }
    return newQuery;
  }
};
