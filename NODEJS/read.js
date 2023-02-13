const fs=require('fs');
/**
 * @Desc
 * Takes filepath and logs the contents.
 * @Params
 * filepathh string
 */
//unicode transformation Format
//file is parameter
function readUTF8File(filePath)
{
    fs.readFile(filePath,"utf--8",(data,error)=>
    {
        if (error)
        {
            console.error(error);
            return;
        }
        console.log(data);
    });
}
//NOn existing file 
readUTF8File("./abcd.txt");
//Existing File
readUTF8File("./static/files")
