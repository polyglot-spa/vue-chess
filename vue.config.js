// vue.config.js

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
    // options...
    chainWebpack: config => {
        // Ignore custom HTML tags/Custom Elements
        config.module
            .rule('vue')
            .use('vue-loader')
            .loader('vue-loader')
            .tap(options => {
                options.compilerOptions = {
                    ...(options.compilerOptions || {}),
                    isCustomElement: tag => /^(chess)-/i.test(tag)
                };
                return options;
            });
    }
}