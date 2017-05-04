var conn = new Socket();

if(conn.listen(9000)){
    function timeout() {
        app.setTimeout(function () {
            var incoming = conn.poll();
            if (incoming){
                eval(incoming.read()); //Dangerous, see README
                incoming.close();
                delete incoming;
            }
            timeout();
        }, 1000);
    }
    timeout()
}
else{
    alert(conn.error)
}
