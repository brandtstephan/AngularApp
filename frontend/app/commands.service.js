(function(){
    angular
    .module('app')
    .factory('commands', function(socket){

        const service ={
            requestTest
        }

        return service;

        function dispatch(commandId, commandParameters){
            return new Promise((resolve)=>{
                socket.emit(commandId, commandParameters, function(data){
                    resolve(data);
                })
            })
        };

        function requestTest(){
            return dispatch('test');
        };
    })
})();