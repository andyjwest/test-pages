import { faWrench } from '@fortawesome/free-solid-svg-icons';

export const repo = 'test-pages';
export const owner = 'andyjwest';
export const githubFileUrl = 'https://raw.githubusercontent.com';
export const branch = 'master';
export const pathToPosts = 'public/posts';

export function getIconByCategory(category){
    return faWrench;
}