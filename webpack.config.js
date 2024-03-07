
    const path = require('path');
    const MiniCssExtractPlugin = require('mini-css-extract-plugin');

    module.exports = {

        mode: 'development',
        devtool: 'source-map',
        entry: './src/index.js',
        output: {
            filename: 'main.js',
            path: path.resolve(__dirname, 'dist'),
        },
        module: {
            rules: [
                {
                    test: /\.(scss|css)$/,
                    use: [
                        MiniCssExtractPlugin.loader, // Извлекает CSS в отдельный файл
                        'css-loader', // Преобразует CSS в CommonJS
                        'sass-loader', // Компилирует SCSS в CSS

                    ],
                },
            ],
        },

        plugins: [
            new MiniCssExtractPlugin({
                filename: 'index.css',
            }),
        ],
    };