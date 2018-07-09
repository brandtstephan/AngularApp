(function(){
    'use strict';

    angular
        .module('app')
        .config(function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("/");
            $stateProvider
                .state("main", {
                    url: '/',
                    controller: 'mainCtrl',
                    templateUrl: 'app/app.html'
                })
                .state("ui",{
                    url: '/',
                    controller: 'uiCtrl',
                    templateUrl: 'app/app.html'
                });
            });

})();