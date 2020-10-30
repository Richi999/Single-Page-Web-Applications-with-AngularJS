
(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['$scope','ShoppingListCheckOffService'];
  function ToBuyController($scope, ShoppingListCheckOffService) {
    $scope.boughtItem = function(index) {
      ShoppingListCheckOffService.boughtItem(index);
    };
    $scope.itemsToBuy = function() {
      return ShoppingListCheckOffService.getItemsToBuy();
    };
    $scope.isEmpty = function() {
      return ShoppingListCheckOffService.isListToBuyEmpty();
    };
  }

  AlreadyBoughtController.$inject = ['$scope', 'ShoppingListCheckOffService'];
  function AlreadyBoughtController($scope, ShoppingListCheckOffService) {
    $scope.itemsBought = function() { return ShoppingListCheckOffService.getItemsBought(); };
    $scope.isEmpty = function() { return ShoppingListCheckOffService.isListBoughtEmpty();  };
  }

  function ShoppingListCheckOffService() {
    var toBuy = [
      { name: "Chocolate Chip Cookies", quantity: 10 },
      { name: "Shortbread Cookies", quantity: 15  },
      { name: "Biscotti Cookies", quantity: 18  },
      { name: "Biscotti Cookies", quantity: 30 },
      { name: "Gingerbread Cookies", quantity: 13 },
      { name: "Oatmeal Raisin Cookies", quantity: 120 },
      { name: "Macaroon Cookies", quantity: 12 }
    ];
    var bought = [];

    return {
      boughtItem: function(itemIndex) {
        var item = toBuy[itemIndex];

        toBuy.splice(itemIndex,1);
        bought.push(item);
      },
      getItemsToBuy: function () { return toBuy; },
      isListToBuyEmpty: function () { return toBuy[0] === undefined; },
      getItemsBought: function () { return bought; },
      isListBoughtEmpty: function () { return bought[0] === undefined; }
    };
  }
})();
