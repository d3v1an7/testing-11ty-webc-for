const pluginWebC = require("@11ty/eleventy-plugin-webc");
module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginWebC, {
    components: "src/_components/*.webc",
  });
  return {
    dir: {
      input: "src",
    },
  };
};
