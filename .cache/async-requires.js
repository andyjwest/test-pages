// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-home-jsx": () => import("/Users/awest/Documents/designer-dungeons/src/templates/Home.jsx" /* webpackChunkName: "component---src-templates-home-jsx" */),
  "component---src-templates-category-jsx": () => import("/Users/awest/Documents/designer-dungeons/src/templates/Category.jsx" /* webpackChunkName: "component---src-templates-category-jsx" */),
  "component---src-templates-posts-post-jsx": () => import("/Users/awest/Documents/designer-dungeons/src/templates/posts/Post.jsx" /* webpackChunkName: "component---src-templates-posts-post-jsx" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/awest/Documents/designer-dungeons/.cache/data.json")

