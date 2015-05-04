/*
 * operations.js
 * Danilo Zekovic
 */

(function (exports) {

  var operations =  {
    
    add:  function(x,y) {
      return x + y;
    },

    subtract: function(x,y) {
      return x - y;
    },

    multiply: function(x,y) {
      return x * y;
    },

    divide: function(x,y) {
      if ( y != 0 ) {
        return x / y;
      }else{
        return "Not posible";
      };
    }
/*
    return function ( x, y){
      console.log("Subtract: " + subtract(x,y));
      console.log("Add: " + add(x,y));
      console.log("multiplay: " + multiply(x,y));
      console.log("Divide: " + divide(x,y));
    };*/
    /*exports.add = add;
    exports.subtract = subtract;
    exports.multiply =multiply;
    exports.divide = divide;*/
  };
  exports.operations = operations;
  //console.log(operations.add(4,3));
})(typeof window === 'undefined' ? module.exports : window);
