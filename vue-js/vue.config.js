// vue.config.js
module.exports = {
    chainWebpack: config => {
        config.module
            .rule('vue')
            .use('vue-loader')
            .tap(options => ({
                ...options,
                compilerOptions: {
                    // Any tag starting with studio- is a custom element
                    isCustomElement: tag => tag.startsWith('studio-')
                }
            }))
    }
}