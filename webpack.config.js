//引入 
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

//webpack配置信息
module.exports = {
    entry: "./src/index.ts",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js",
        environment: {
            arrowFunction: false
        }
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: "babel-loader",
                        //设置babel
                        options: {
                            //设置预定义环境
                            presets: [
                                [   
                                    //指定环境插件
                                    "@babel/preset-env",
                                    //配置信息
                                    {
                                        //要兼容的目标浏览器
                                        targets: {
                                            "chrome": "58",
                                            "ie": "11"
                                        },
                                        "corejs":"3",
                                        //使用corejs的方式 按需加载
                                        "useBuiltIns": "usage"
                                    }
                                ]
                            ]
                        }
                    },
                    'ts-loader'

                ],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            //根据模版生成
            template: "./src/index.html"
        }),
    ],
    resolve: {
        extensions: ['.ts', '.js']
    }
}