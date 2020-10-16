module.exports = {
    css: {
        loaderOptions: {
            sass: {
                additionalData: `
                    @import "@/sass/_mixins.scss";
                `,
            },
        },
    },
};
