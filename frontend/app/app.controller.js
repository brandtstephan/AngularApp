(function(){
    'use strict';
    
    angular
        .module('app')
        .factory('User', function(){
            
            const users = [{name: 'Stephan',
                             last: 'Brandt'}]

            let getUsers = ()=>{
                return {name : users[0].name, last : users[0].last}
            }

            
            return{
               getUsers: getUsers
            }
        })
        .controller('mainCtrl', function($scope, User){
            console.log(User.getUsers())
            const ctrl = this;

            $scope.getUsers = User.getUsers()

           
            
            
        })
        .controller('uiCtrl', function($scope){
            $scope.alerts = [
                { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
                { type: 'success', msg: 'Well done! You successfully read this important alert message.' }
              ];
            
              $scope.addAlert = function() {
                $scope.alerts.push({msg: 'Another alert!'});
              };
            
              $scope.closeAlert = function(index) {
                $scope.alerts.splice(index, 1);
              };
        });
})();