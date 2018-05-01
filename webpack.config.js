var config = {
  // Packaged Portal Files
  entry: './main.js',

  // Configure package results, path defines output folder, filename defines the name of the packaged result file
  output: {
    path: './',
    filename: 'index.js'
  },

  // Set server port number
  devServer: {
    inline: true,
    port: 7777
  },
  devtool:"source-map",
  // Configuration module processing logic, using loaders to define the loader
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}

module.exports = config;
