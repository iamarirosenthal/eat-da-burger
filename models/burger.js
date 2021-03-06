var orm = require('../config/orm');

var burger = {
  selectAll: function(cb) {
    orm.selectAll('burgers', function(res){
      cb(res);
    });
  },

  inserOne: function(cols, vals, cb) {
    orm.inserOne('burgers', cols, vals, function(res){
      cb(res);
    });
  },
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne('burgers', objColVals, condition, function(res){
      cb(res);
    });
  }
};

module.exports = burger; 
