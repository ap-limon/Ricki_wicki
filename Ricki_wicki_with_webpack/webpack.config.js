const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const imageMinimizerPlugin = require("image-minimizer-webpack-plugin");
let mode = "development";
let fileName = "main.js";

if (process.env.NODE_ENV === "production") {
    mode = "production"
    fileName = "main[contenthash].js";
}

module.exports = {
    mode: mode,
    entry: './src/index.js',
    output: {
        filename: fileName,
        assetModuleFilename: "images/[contenthash][ext][query]",
        path: path.resolve(__dirname, 'build'),
    },
    devtool: "source-map",
    devServer: {
        hot: true,
    },
    plugins: [
        new htmlWebpackPlugin({
            template: "./index.html",
        })
    ],
    module: {
        rules: [
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test:/\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                type: "asset/resource",
            }
        ],
    },
    optimization: {
        minimizer: [
            "...",
            new imageMinimizerPlugin({
                minimizer: {
                    implementation: imageMinimizerPlugin.squooshMinify
                }
            })
        ]
    }
}