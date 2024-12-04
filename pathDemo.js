import path from 'path';
import url from 'url';

const filePath = './dirl/dirl2/test.txt'

//basename()
console.log (path.basename(filePath));

//dirname ()
console.log(path.dirname(filePath));

//extname()
console.log(path.extreme(filePath))

//parse()
console.log(path.parse((filePath)))

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)