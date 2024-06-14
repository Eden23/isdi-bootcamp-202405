function generatePostList(posts, section) {
    if (posts.length > 0) {
        for (let i = 0; i < posts.length; i++) {
            var imgDiv = document.createElement('div');
            section.appendChild(imgDiv);

            var postImage = document.createElement('img');
            postImage.src = posts[i].img;
            imgDiv.appendChild(postImage);

            var postText = document.createElement('p');
            postText.innerText = posts[i].text;
            imgDiv.appendChild(postText);

            var deletePost = document.createElement('button');
            deletePost.id = posts[i].id
            deletePost.type = 'submit';
            deletePost.innerText = 'Delete this post'
            imgDiv.appendChild(deletePost);

            deletePost.onclick = function (event) {
                event.preventDefault();

                deletePosts(event.target.id);

                document.body.removeChild(section);

                generatePostList(posts, section);
            }
        }
    } else {
        var noPostText = document.createElement('h2');
        noPostText.innerText = 'No Posts Yet'
        section.appendChild(noPostText);
    }
}