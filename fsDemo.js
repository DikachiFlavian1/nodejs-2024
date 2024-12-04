import fs from 'fs/promises';
/*import fs from 'fs'

//readFile() -callback
fs.readFile('./test.txt', 'utf8',(err,data)=>{
    if(err) throw err;
    console.log(data);
});

//readFileSync() -Synchronous version
const data = fs.readFileSync('./test.txt','utf8');
console.log(data);*/

//readFile() - Promise.then()
//fs.readFile('./test.text','utf8')
//.then((data)=>console.log(data))
//.catch((err)=>console.log(err))

//const readFile =async()=>{
//    try {
 //       const data = fs.readFileSync('./test.txt','utf8'); 
//    } catch (error) {
 //       console.log(error)
//    }
//};

const writeFile = async() =>{
    try {
        await fs.writeFile('./test.txt', 'Hello, I am writing to this file')
        console.log('File written to...')
    } catch (error) {
        console.log(error)
    }
}
//append file
const appendFile = async()=>{
    try {
        await fs.appendFile('./test.txt','\n This is appended')
        console.log('File appended to ...')
    } catch (error) {
        console.log(error)
    }
}

writeFile();
apppendFile();
readFile();
