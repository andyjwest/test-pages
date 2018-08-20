function buildGithubUrl(dir, post) {
    return "https://raw.githubusercontent.com/andyjwest/test-pages/master/public/posts/" + dir  + "/" + post;
}

export default buildGithubUrl;