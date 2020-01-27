


const post = {
    id: "",
    text: "",
    comments: []
}

const comment = {
    id: "",
    text: ""
}

const Tweeter = function () {
    let postIdcounter = posts.length + 1
    const getPosts = () => posts
    const addPost = function (txt) {
        post.id = "p" + postIdcounter
        post.text = txt
        post.comments = []
        posts.push(post)
        postIdcounter += 1
    }
    const removePost = function (postID) {
        for (const index in posts) {
            if (posts[parseInt(index)].id == postID)
                posts.splice(parseInt(index), 1)
        }
    }

    const addComment = function (text, postID) {
        for (const post of posts) {
            if (post.id === postID) {
                let comment = {
                    id:"c7",//need to change it to dynamic
                    text: text,
                }
                post.comments.push(comment)
            }
            //addPost(text)
        }
    }

    const removeComment = function (postID, commentID) {
        for (const post of posts) {
            if (post.id === postID) {
                for (const index in post.comments) {
                    if (post.comments[parseInt(index)].id === commentID) {
                        post.comments.splice(parseInt(index), 1)
                    }
                }
            }

        }
    }

    return { addPost, removePost, addComment, removeComment, getPosts }
}









// posts = [] 
// let postIdcounter = 1
// const getPosts = () => posts
// const addPost = function(txt){
//     const post
//     post.id="p"+postIdcounter
//     post.text=text
//     posts.push()
// }
// const removePost=function(postID){
//     for (const index in posts) {
//         if(posts[parseInt(index)].id==postID)
//             posts.splice(parseInt(index),1)
//     }
// }
// const addComment 