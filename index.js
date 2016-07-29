var fs = require('fs');
var resume = fs.readFileSync('resume.json');
module.export = resume;
