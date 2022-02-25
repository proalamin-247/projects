function loadAlbums() {
    fetch('https://jsonplaceholder.typicode.com/albums')
        .then(res => res.json())
        .then(data => displayAlbums(data));
}
loadAlbums();
function displayAlbums(albums) {
    const albumContainer = document.getElementById('albums');
    for (const album of albums) {
        const para = document.createElement('p');
        para.style.textAlign = 'center';
        para.innerText = `${album.id} ${album.title}`;
        console.log(album);
        albumContainer.appendChild(para);
    }
}
console.log('album');