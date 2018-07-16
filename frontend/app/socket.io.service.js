(function(){

    angular
        .module('app')
        .factory('socket', function($rootScope){
            let socket = io.connect();

            const service ={
                emit: emit
            }

            return service;

            function emit(name, data, callback){
                socket.emit(name, data, function(){
                    const args = arguments;
                    $rootScope.$apply(function(){
                        callback.apply(socket,args);
                    })
                })

            }
    });

})();