
module.exports = {
    entry: {
        main: './app/client/src/app.jsx'
    },
    output: {
        filename: 'app/client/build/build.js'
    },
    externals: {
        "jquery": "jQuery"
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
              test : /.less$/,
              loader : "style!css!less"
            },
            {
              test : /.css$/,
              exclude: /node_modules/,
              loader : "style!css"
            },
            {
              test: /pickadate/,
              loader: 'imports?define=>false'
            }
        ]
    }
};
