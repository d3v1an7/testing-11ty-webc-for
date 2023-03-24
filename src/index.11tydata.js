module.exports = {
  eleventyComputed: {
    postsData: async () => {
      const response = await fetch("https://dummyjson.com/posts").then((res) =>
        res.json()
      );
      return response;
    },
  },
};
