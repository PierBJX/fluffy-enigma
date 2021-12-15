const path = require('path');

module.exports = {
  mode: 'development',
  context: __dirname,
  entry: {
    example: {
      import: './example.js',
      // library: {
      //   name: {
      //     commonjs: 'library/[name]',
      //     amd: 'library/[name]',
      //     root: ['library', '[name]'],
      //   },
      //   type: 'umd',
      //   umdNamedDefine: true,
      // },
    },
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    library: {
      name: {
        commonjs: 'library/[name]',
        amd: 'library/[name]',
        root: ['library', '[name]'],
      },
      type: 'umd',
      umdNamedDefine: true,
    },
  },
  externals: {
    jquery: 'jQuery',
  },
};
