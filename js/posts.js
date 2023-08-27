function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPosts(data))
}

/* 
1. get the container elrment where you want to add the new elements
2. create child element
3. set innerText or innerHTML
4.appendChild
*/


function displayPosts(posts){
    const postsContiner = document.getElementById('posts-container');
    for(const post of posts ){
        const postDiv = document.createElement('div');
        
        postDiv.innerHTML = `
            <h4>user-${post.userId}</h4>
            <h5>post: ${post.title} title</h5>
            <p>post Descreption: ${post.body}</p>
        `
        postsContiner.appendChild(postDiv)
    }
}

loadPosts()

