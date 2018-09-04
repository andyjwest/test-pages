import {appAddress} from "./properties";

export function getTwitterHref(pathToShare, text){
    const escapedUrl = encodeURI(pathToShare);
    return `https://twitter.com/intent/tweet?url=${appAddress}${escapedUrl}&text=${text}`;
}

export function getFacebookHref(url) {
    const escapedUrl = encodeURI(url);
    return `https://www.facebook.com/sharer/sharer.php?u=${appAddress}${escapedUrl}`;
}

export function getPintrestHref(url, text, media){
    const escapedUrl = encodeURI(url);
    return `http://www.pinterest.com/pin/create/button/?url=${appAddress}${escapedUrl}&media=${media}&description=${text}`;
}