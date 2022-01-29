const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  context: __dirname,
  entry: {
    example: {
      import: './example.js',
    },
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '',
    filename: 'bundle.js',
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: 'requirejs/**/*',
          to: '3rdparty',
          context: '../../node_modules',
        },
      ],
    }),
  ],
  externals: {
    jquery: 'jQuery',
  },
};
