function mapCategory(array){
    return array.filter(category => category.type = "dir")
        .map(response => {
            return {
                "name": response.name,
                "posts": mapPostsToCategory(response.url)
            }
        });
}

function mapPostsToCategory(url){
    return fetch(url).then(response => {return response.json()})
        .then(array => {
            array.filter(file => file.type = "file")
                .map(file => {
                    return {
                        "name": file.name,
                        "url": file.download_url
                    }
                })

        });
}

export default mapCategory;