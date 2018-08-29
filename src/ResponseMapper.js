import {owner, repo, githubFileUrl, branch, pathToPosts} from './properties';

export function buildGithubUrl(postPath) {
    return `${githubFileUrl}/${owner}/${repo}/${branch}/${pathToPosts}${postPath}`;
}
