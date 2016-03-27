const webpack = require('webpack');
const merge = require('webpack-merge');
const pkg = require('./package.json');

/** Webpack Plugins */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

/** Retrieves the current npm task being executed */
const TARGET = process.env.npm_lifecycle_event;

/** Paths */
const PATHS = {
  app: __dirname + '/src',
  build: __dirname + '/build',
  style: __dirname + '/style/projekt.css'
}

process.env.BABEL_ENV = TARGET;

const common = {
  entry: {
    app: PATHS.app,
    style: [
      './style/projekt.css',
      './style/style.css',
      './style/font-awesome.css',
      './style/login5.css',
      './style/components-rounded.min.css',
      './style/plugins.min.css',
      './style/layout.min.css',
      './style/default.min.css',
    ]
  },
  output: {
    path: __dirname,
    publicPath: '/',
    filename: '[name].js'
  },
  module: {
    preLoaders: [
      {test: /\.jsx?$/, loader: 'eslint', include: PATHS.app }
    ],
    loaders: [
      {test: /\.jsx?$/, loader: 'babel?cacheDirectory', include: PATHS.app},
      {test: /\.scss$/, loader: 'style!css!sass', include: PATHS.app},
      {test: /\.png$/,  loader: 'url'},
      {test: /\.json$/, loader: 'json'},
      // {test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/, loader: 'file-loader'}
      { test: /\.((woff2?|svg)(\?v=[0-9]\.[0-9]\.[0-9]))|(woff2?|svg|jpe?g|png|gif|ico)$/, loader: 'url?limit=10000' },
      { test: /\.((ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9]))|(ttf|eot)$/, loader: 'file' }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};

if (TARGET === 'start' || TARGET) {
  module.exports = merge(common, {
    devtool: 'eval-source-map',
    devServer: {
      historyApiFallback: true,
      contentBase: './',
      hot: true,
      inline: true
    },
    module: {
      loaders: [
        {test: /\.css$/, loaders: ['style', 'css']},
      ]
    }
  })
}

if (TARGET === 'build') {
  module.exports = merge(common, {
    entry: {
      vendor: Object.keys(pkg.dependencies).filter(function(v) {
        return v !== 'alt-utils';
      })
    },
    output: {
      path: PATHS.build,
      filename: '[name].[chunkhash].js',
      chunkFilename: '[chunkhash].js'
    },
    module: {
      loaders: [
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract('style', 'css')
        }
      ]
    },
    plugins: [
      new CleanPlugin([PATHS.build]),
      new ExtractTextPlugin('[name].[chunkhash].css', {allChunks: false}),
      new webpack.optimize.CommonsChunkPlugin({
        names: ['vendor', 'manifest']
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"production"'
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      }),
      new HtmlWebpackPlugin({
        template: 'node_modules/html-webpack-template/index.ejs',
        title: 'Patient Portal',
        appMountId: 'app',
        inject: false
      })
    ]
  });
}
