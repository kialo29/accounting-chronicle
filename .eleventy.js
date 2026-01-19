module.exports = function(eleventyConfig) {
  // Copy static assets
  eleventyConfig.addPassthroughCopy("styles.css");
  eleventyConfig.addPassthroughCopy("script.js");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("src/images");
  
  // Date formatting filter
  eleventyConfig.addFilter("dateFormat", function(date) {
    const options = { month: 'short', year: 'numeric' };
    return new Date(date).toLocaleDateString('en-GB', options);
  });

  // Get featured articles
  eleventyConfig.addCollection("featuredArticles", function(collectionApi) {
    return collectionApi.getFilteredByTag("articles")
      .filter(item => item.data.featured)
      .sort((a, b) => b.date - a.date)
      .slice(0, 3);
  });

  // Get all articles sorted by date
  eleventyConfig.addCollection("sortedArticles", function(collectionApi) {
    return collectionApi.getFilteredByTag("articles")
      .sort((a, b) => b.date - a.date);
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
