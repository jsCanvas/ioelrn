//引进一个node核心模块path
let path = require('path');
const webpack = require('webpack');
var Visualizer = require('webpack-visualizer-plugin');
var nodeCmd = require('node-cmd');
var arguments = process.argv;
var argv = require('yargs').argv;
var oustr = '/user/set' ,outarr = ['user','set'];

nodeCmd.get(
    'node server',
    function(err, data, stderr){
        console.log(data);
    }
);


if(argv.myopt){
    // oustr = argv.myopt+'';
    outarr = argv.myopt.split('/');
}


// var outarr  = arguments[2].split('/');
var outname = outarr[outarr.length-1];
var okpath = outarr.splice(-1,1);
var outpath = outarr.join('/');
console.log(outpath);
module.exports = {
    //打包的入口
    entry:  path.join(__dirname,'./src/pages/',outpath,outname+'.js'),

    externals: {
        'jquery': 'jQuery'
    },
    //打包出口
    output: {
        filename: outname+'.min.js',//打包后的文件名
        //path必须是绝对路径
        //path.resolve将相对路径转绝对路径
        path: path.resolve( './src/js/'+outpath) //打包后文件的路径
    },
    node: {
        fs: "empty"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader', // 'babel-loader' is also a legal name to reference  
                query: {
                    presets: ['react', 'latest'],
                    plugins: ["transform-runtime", "transform-class-properties"]
                }
            }, {
                test: /\.css$/,
                loaders: ['style-loader','css-loader']
            }, {
                test: /\.less/,
                loaders: ['style-loader', 'css-loader','less-loader'],
            }, {
                test: /\.(eot|woff|svg|ttf|woff2|gif)(\?|$)/,
                loader: 'file-loader?name=[hash].[ext]'
            }, {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=1200&name=[hash].[ext]' //注意后面那个limit的参数，当你图片大小小于这个限制的时候，会自动启用base64编码图片
            }
        ]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            // test: /\.xxx$/, // may apply this only for some modules
            options: {
                rules: [
                    {
                        //匹配js,使用babel-loade，但不管node_modules目录下面的
                        //如果用到babel-loader，需要配置babelrc
                        test: /|.jsx?$/, use: 'babel-loader',
                        exclude: /node_modules/
                    }

                ]
            }
        }),
        new Visualizer({
            filename: './statistics.html'
        })
    ]
    //给模块配置规则

}



nodeCmd.run('node server');
