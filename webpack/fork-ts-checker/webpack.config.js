const path = require('path');
const ForkTsChecker = require('fork-ts-checker-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: './example.ts',
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              onlyCompileBundledFiles: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new ForkTsChecker({
      typescript: {
        mode: 'write-dts',
      },
    }),
  ],
};
