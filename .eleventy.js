const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  eleventyConfig.addLayoutAlias("post", "layouts/post.njk");

  // Date formatting (human readable)
  eleventyConfig.addFilter("ddMMyy", dateObj => {
    return DateTime.fromJSDate(dateObj).toFormat("dd.MM.yy");
  });
};
