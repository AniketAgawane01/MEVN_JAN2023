var http=require('http');//importing the inbuilt module
var dt=require('./main.js');
//calling one module from another/user defined module 
//dt :today's date
http.createServer(function(req,res)
{
     //200 status code means success/failure of code
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.write("This is the sample creation of Second Server");
    //datetime is being fetched from the outside module
    //using the content type mentioned above as text/html user defined
    res.end();//ending the writing functionality for a request response function 

}).listen(8001);