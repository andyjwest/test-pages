const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-home-jsx": hot(preferDefault(require("/Users/awest/Documents/designer-dungeons/src/templates/Home.jsx"))),
  "component---src-templates-category-jsx": hot(preferDefault(require("/Users/awest/Documents/designer-dungeons/src/templates/Category.jsx"))),
  "component---src-templates-posts-post-jsx": hot(preferDefault(require("/Users/awest/Documents/designer-dungeons/src/templates/posts/Post.jsx")))
}

