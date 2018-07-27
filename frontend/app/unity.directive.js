(function () {
  "use strict";
  angular
    .module("app")
    .directive("unityDirective", function () {
      return {
        restrict: "AE",
        replace: true,
        scope: {

        },
        templateUrl: "app/unity-template.html",

        link: function (scope, element, attrs) {
          window.gameInstance = UnityLoader.instantiate("gameContainer", "unity/Build/UnityPackageManager.json", { onProgress: UnityProgress });
        }
      };
    });
})();