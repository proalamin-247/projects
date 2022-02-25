function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPost(data));
}

loadPost();
function displayPost(allPost){
    const postContaienr = document.getElementById('posts');
    for(const post of allPost){
        const div = document.createElement('div');
        div.classList.add('post');
        div.innerHTML = `
        <h4>${post.title}</h4>
        <p>${post.body}</p>
        `;
        console.log(post);
        postContaienr.appendChild(div);
    }
}

function addPost(){
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method:'POST',
        body: JSON.stringify({
            title:'my new post',
            body: 'This is my post',
            userId:1,
        }),
        headers:{
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
    .then(res => res.json())
    .then(data=> console.log(data));
}


function addPost2(){
    fetch('https://jsonplaceholder.typicode.com/psdaosts', {
        method:'POST',
        body: JSON.stringify({
            title:'my new post',
            body: 'This is my post',
            userId:1,
        }),
        headers:{
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
    .then(res => res.json())
    .then(data=> console.log(data));
}


const info={ 
    data: [ 
        { language:"Javascript", library:"React" } 
    ] 
}  