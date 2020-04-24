const path = require('path');
const SRC_DIR = path.join(__dirname, '/client');
const DIST_DIR = path.join(__dirname, '/public');

module.exports = {
  entry: `${SRC_DIR}/app.jsx`,
  output: {
    path: `${DIST_DIR}`,
    filename: 'app.js'
  },
  module: {
    rules: [{ 
        test: /\.jsx$/, 
        include: SRC_DIR, 
        loader: 'babel-loader',
        query: {
            presets: ['@babel/preset-react', '@babel/preset-env']
        }
      }
    ]
  }
};