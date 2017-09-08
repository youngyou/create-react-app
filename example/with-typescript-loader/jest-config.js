module.exports = function (config) {
    config.transform = {
        '^.+\\.(ts|tsx)$': require.resolve('ts-jest/preprocessor.js'),
        ...config.transform
    };
    config.testEnvironment = 'jsdom';
    config.testMatch.push("<rootDir>/src/**/?(*.)(spec|test).ts?(x)");
    config.moduleFileExtensions = ["ts", "tsx", "js", "jsx", "json"];
    return config;
}