function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
}


function loadData2(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => console.log(data))
}

function loadUsers10(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUsers(data));
    
}
function displayUsers(data){
    // console.log(data)
    const ul = document.getElementById('users');
    for( user of data){
        console.log(user);
        const li = document.createElement('li');
        li.innerText= `name: ${user.name} 
        email: ${user.email}`;
        ul.appendChild(li);
    }
}

// load 100 user
function loadPost100(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPost(data));
}
// loadUsers100();
function displayPost(allPost){
    const title = document.getElementById('title');
    for(post of allPost){
        console.log(post)
        const creatTitle = document.createElement('h4');
        creatTitle.innerText = `title-: ${post.title}`;
        title.appendChild(creatTitle);
    }
}