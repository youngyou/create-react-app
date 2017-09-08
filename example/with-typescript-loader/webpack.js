'use strict';

const path = require('path');

module.exports = function (config) {
    config.resolve.extensions = ['.ts', '.js', '.json', '.tsx', '.jsx'];
    config.module.rules.unshift({
        test: /\.(ts|tsx)$/,
        loader: require.resolve('tslint-loader'),
        enforce: 'pre',
        include: path.resolve('./src'),
    });
    config.module.rules[2].oneOf.unshift({
        test: /\.(ts|tsx)$/,
        include: path.resolve('./src'),
        loader: require.resolve('awesome-typescript-loader'),
        query: {
            useBabel: true,
            useCache: true
        }
    });
    return config;
}