const path = require('path');

module.exports = {
  mode: 'development',
  context: __dirname,
  entry: {
    fileA: {
      import: './fileA.js',
      // dependOn: 'fileB',
    },
    fileB: {
      import: './fileB.js'
    }
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
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
    ...{ './fileB': 'fileB' },
  },
};
