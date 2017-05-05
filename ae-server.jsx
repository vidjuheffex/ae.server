var SERVER = (function(){ 
    var conn;
    
    function listen(){
        app.setTimeout(function(){
            var incoming = conn.poll();
            if (incoming){
                try {
                    eval(incoming.read());
                    incoming.writeln("Success!")
                }
                catch(err){
                    incoming.writeln (err);
                }
                incoming.close();
                delete incoming
            }
            listen();
        }, 1000)
    }

    function init(){
        conn = new Socket()
        if(conn.listen(9000)){
           listen();
        };
    else {
        alert(conn.error);
        }
    }

    function close(){
        conn.close();
        delete conn();
    }

return {
        init: init,
        close: close,
    }
}());

SERVER.init()
