export function getTwitterHref(url, text){
    const escapedUrl = encodeURI(url);
    return `https://twitter.com/intent/tweet?url=${escapedUrl}&text=${text}`;
}

export function getFacebookHref(url) {
    const escapedUrl = encodeURI(url);
    return `https://www.facebook.com/sharer/sharer.php?u=${escapedUrl}`;
}

export function getPintrestHref(url, text, media){
    const escapedUrl = encodeURI(url);
    return `http://www.pinterest.com/pin/create/button/?url=${escapedUrl}&media=${media}&description=${text}`;
}