(function () {
  "use strict";
  angular
    .module("app")
    .factory("User", function () {
      const users = [
        {
          name: "Stephan",
          last: "Brandt"
        }
      ];

      let getUsers = () => {
        return { name: users[0].name, last: users[0].last };
      };

      return {
        getUsers: getUsers
      };
    })
    .controller("mainCtrl", function ($scope, User, commands) {
      const ctrl = this;

      $scope.commands = commands;
      $scope.getUsers = User.getUsers();
      $scope.testRequest = () => {
        $scope.commands.requestTest().then(reply => {
          console.log(reply);
        });
      };
    })
    .controller("uiCtrl", function ($scope, commands, socket) {
      $scope.oneAtATime = true;

      $scope.commands = commands;

      $scope.groups = "";

      $scope.commands.requestData().then(reply => {
        console.log(reply);

        $scope.$apply(() => {
          $scope.groups = reply.groups;
        })
      });

      /*$scope.data = () => {
        $scope.commands.requestData().then(reply => {
          console.log(reply);
          $scope.$apply(() => {
            $scope.groups = reply.groups;
          });
        });
      };
      $scope.data();
      */

      /*socket.emit(
        "data",
        {},
        {
          apply: args => {
            $scope.groups = args.groups;
          }
        }
      );
    */
      console.log($scope.groups);

      $scope.radioModel = "Left";
    });
})();
