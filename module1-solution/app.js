(function () {
'use strict';
angular.module('LunchChecker', [])
    .controller('MsgController', MsgController);
    MsgController.$inject = ['$scope', '$filter'];
    function MsgController($scope, $filter) {
        $scope.name = "";//make input box empty.
        $scope.msg = "";

        $scope.display = function () {
            var look_and_feel = mealsChecker($scope.name);
            $scope.msg = look_and_feel;
        };

        /* Input box accept strings separated by coma only. It does NOT
      accept an empty item(s), i.e., , , as an item towards to the count. */
        function mealsChecker(string) {
          //boolean to indicate string of empty items.
            var b = true;
            var message = "";
            if (string) {
               var arr = string.split(',');
                var mealsCounter = arr.length;
                for (var i = 0; i < arr.length; i++) {
                  //check for empty item in array.
                  if (!arr[i]) {
                    mealsCounter -= 1;
                  }
                }
                if (mealsCounter == 0) {
                  b = false;
                }
                if (mealsCounter <= 3 && mealsCounter != 0) {
                  $scope.look_and_feel = {
                      "color": "green", "padding": "5px", "border":"1px solid green"
                  }
                    message = "Enjoy!";
                    return message;
                }
                if (mealsCounter >= 4) {
                  $scope.look_and_feel = {
                      "color": "green", "padding": "5px", "border":"1px solid green"
                  }
                    message = "Too Much!";
                    return message;
                }
            }
            /* check what string is. If empty or contains
            empty items only, ask for data then*/
            if (!b || !string) {
                $scope.look_and_feel = {
                    "color": "red", "padding": "5px", "border":"1px solid red"
                }
                message = "Please enter data first!";
                return message;
            }
        };
    }
})();
