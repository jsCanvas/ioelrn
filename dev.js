var nodeCmd = require('node-cmd');

var arguments = process.argv;
console.log(arguments);
var outarr  = arguments[2].split('/');
var outname = outarr[-1];
var outpath = outarr.splice(-1,1).join('/');

function runCmdTest() {
    nodeCmd.get(
        'ipconfig',
        function(err, data, stderr){
            console.log(data);
        }
    );
 
    nodeCmd.run('webpack');
    nodeCmd.run('node server');
}

runCmdTest();

module.exports = {
    path: outpath,
    name: outname
}
