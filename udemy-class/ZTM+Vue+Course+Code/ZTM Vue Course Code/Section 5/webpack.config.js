const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: './section-5-2-STARTER/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'build.js',
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                },

            },
            {
                test: /\.scss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ],
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "main.css",
        }),
    ],
    watch:true
}