var http=require('http');//importing the inbuilt module
var dt=require('./ownModule.js');//calling one module from another/user defined module 
//dt :today's date
http.createServer(function(req,res)
{
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.write("The date and time are currently :"+dt.getCurrentDate());
    //datetime is being fetched from the outside module
    //using the content type mentioned above as text/html user defined
    res.end();//ending the writing functionality for a request response function 

}).listen(8000);//mentioning the port our application will run on the server

