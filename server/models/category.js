'use strict';
var Mongo = require('mongodb');


function Category(o, id){
  this.name   = o.name;
  this.userId = Mongo.ObjectID(id);
}

Object.defineProperty(Category, 'collection', {
  get: function(){return global.mongodb.collection('categories');}
});

Category.findById = function(id, cb){
  var _id = Mongo.ObjectID(id);
  Category.collection.findOne({_id:_id}, function(err, obj){
    cb(err, _.create(Category.prototype, obj));
  });
};

Category.all = function(cb){
  Category.collection.find({userId:user._id}).toArray(cb);
};


Category.create = function(obj, id, cb){
  var c = new Category(obj, id);
  Category.collection.save(c, cb);
};

module.exports = Category;
