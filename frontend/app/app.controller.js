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
    .controller("uiCtrl", function ($scope, commands, socket, languageService) {

      $scope.oneAtATime = true;
      $scope.activeModule = 0;
      $scope.iframeValue = false;
      $scope.groups = "";
      $scope.radioModel = "Left";
      $scope.selectedLanguage = 'en';
      $scope.lang = languageService.getDataByLanguage($scope.selectedLanguage);

      $scope.commands = commands;
      $scope.setActiveModule = setActiveModule;
      $scope.changeLanguage = changeLanguage;

      /////////

      init();

      //////////

      function changeLanguage(lang) {
        $scope.selectedLanguage = lang;
        $scope.lang = languageService.getDataByLanguage($scope.selectedLanguage);
      }

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

      function unloadUnity(module) {
        $scope.iframeValue = module;
        var frame = document.getElementById("unityFrame");
        if (!$scope.iframeValue) {
          frame.parentNode.removeChild(frame);
        } else {
          var frame
        }
      }

    });
})();
