const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge.strategy({ 
  'entry': 'replace', 
  'module.rules': 'replace' 
})(common, {
  entry: './src/testing.ts',
  mode: 'development',
  module: {
    rules: [
      {
        test: /(?!(index))\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: 'tsconfig.testing.json'
            }
          }
        ]
      }
    ]
  },
  output: {
    filename: 'test.js',
    path: path.resolve(__dirname, 'dist')
  }
});

