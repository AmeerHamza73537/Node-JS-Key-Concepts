const path = require('path')
console.log(path.sep)

//  path.join - join method joins a sequence of path segments using that platform specific 
// separator as the limiter and the second thing is it returns a normalized resulting path
// and in order 

const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base);
// path.resolve - it accepts a sequence of paths or path segments and resolve it into an 
// absolute path 

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt')
console.log(absolute);
