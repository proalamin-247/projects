const loadBuddies = () =>{
    fetch('https://randomuser.me/api/?results=1000')
    .then(res => res.json())
    .then(data => displayBuddies(data))
}
loadBuddies();
const displayBuddies = allBuddieData =>{
    console.log(allBuddieData);
    const buddies = allBuddieData.results;
    const buddyContainer = document.getElementById('buddyDiv');
    for( const buddy of buddies){
        const p = document.createElement('p');
        p.innerText = `Name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last} 
        Gender: ${buddy.gender}
        Age: ${buddy.registered.age}
        email: ${buddy.email}
        phone: ${buddy.phone}
        Address-
        coutry:${buddy.location.country}, Sate:${buddy.location.state}, City:${buddy.location.city}, Postcode:${buddy.location.postcode}, time-zone:${buddy.location.timezone.offset} `;
        buddyContainer.appendChild(p);
        // console.log(buddy.registered.age);
    }
}