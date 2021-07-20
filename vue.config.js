module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: ` @import "@/components/atoms/global-styles/global-styles.scss";`
      }
    }
  }
};