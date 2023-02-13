var fs=require('fs');
//import statement 
//it imports the filestream from the node modules
//module:
//collection of functionalities which are not user created
//bit available from node js
var rs=fs.createReadStream('./demofile.txt');//means path
//var is shortform for variable used to store local values/ temp values
//reading the outside placed demotext file
rs.on('open',function(){
    console.log('The file is Open');
});