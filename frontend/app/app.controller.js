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

    })
    .controller("uiCtrl", function ($scope, commands, socket) {

      $scope.oneAtATime = true;
      $scope.activeModule = 0;
      $scope.unityAccordion = false;
      $scope.groups = "";
      $scope.radioModel = "Left";

      $scope.commands = commands;
      $scope.setActiveModule = setActiveModule;

      /////////

      init();

      //////////

      function init() {
        $scope.commands.requestData().then(reply => {
          $scope.$apply(() => {
            $scope.groups = reply.groups;
          });
        });
      }

      function setActiveModule(module) {
        $scope.activeModule = module;
      }

    });
})();
