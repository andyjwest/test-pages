import { faWrench, faCogs, faFill, faPrayingHands } from '@fortawesome/free-solid-svg-icons';
import beBetter from "./posts/be-a-better-info.json";
import brewBits from "./posts/brew-bits-info.json";
import hotfix from "./posts/hotfix-info.json";
import demi from "./posts/demi-info.json";
import {categories} from "./posts/info";

export const repo = 'test-pages';
export const owner = 'andyjwest';
export const githubFileUrl = 'https://raw.githubusercontent.com';
export const branch = 'master';
export const pathToPosts = 'public/posts';

//TODO bind this
export function getIconByCategory(category){
    switch (category) {
        case hotfix.path: return faCogs;
        case brewBits.path: return faFill;
        case demi.path: return faPrayingHands;
        case beBetter: return faWrench;
    }
    return "";
}
