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
            
        });
})();