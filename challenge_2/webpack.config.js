const path = require('path');
const SRC_DIR = '/client';
const DIST_DIR = '/public';

module.exports = {
  entry: `${SRC_DIR}/app.jsx`,
  output: {
    path: path.resolve(__dirname, `${DIST_DIR}`),
    filename: 'app.js'
  },
  module: {
    rules: [
      { test: /\.jsx$/, 
        include: SRC_DIR, 
        use: 'babel-loader',
        query: {
            presets: ['@babel/preset-react', '@babel/preset-env']
        }
      }
    ]
  }
};