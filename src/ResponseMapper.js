import {owner, repo, githubUrl, pathToPosts, categories} from './properties';

export function getPosts(category, callback) {
    if (categories.includes(category)) {
        return fetch(`${githubUrl}/repos/${owner}/${repo}/contents/${pathToPosts}/${category}`)
            .then(res => res.text()).then(
                data => {
                    let array = JSON.parse(data);
                    array.filter(file => file.type = "file")
                        .map(file => {
                            return {
                                "name": file.name,
                                "url": file.download_url
                            }
                        });
                    callback(array);
                }
            ).catch(reason => {
                console.log(reason);
            })
    } else {
        return null;
    }
}

export function buildGithubUrl(postPath) {
    return "https://raw.githubusercontent.com/andyjwest/test-pages/master/public/posts/" + postPath;
}
