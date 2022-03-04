const loadCountries= () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}
loadCountries();

const displayCountries = counties =>{
    // console.log(counties);
    // for(const country of counties){
    //     console.log(country);
    // }
    const countriesDiv =document.getElementById('countires');
    counties.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('country');

       /*  const h3 = document.createElement('h3');
        h3.innerText = country.name.common;
        div.appendChild(h3);
        const p = document.createElement('p');
        p.innerText= country.capital;
        div.appendChild(p); */
        div.innerHTML = `
        <h3>${country.name.common}</h3>
        <p>${country.capital}</p>
        <button onClick="loadCountryByName('${country.name.common}')">Show Details</button>
        `

        countriesDiv.appendChild(div);
        // console.log(country);
    })
}

const loadCountryByName = name =>{
    const url = `https://restcountries.com/v3.1/name/${name}`
    fetch(url)
    .then(res => res.json())
    .then(data=> displayCountryDetails(data[0]))
    // console.log(url);
}
const displayCountryDetails = country =>{
    const countryDiv = document.getElementById('country-details');
    countryDiv.innerHTML=`
    <h5>Name:${country.name.common}</h5>
    <p>Total population: ${country.population}</P>
    <img width="300px" src="${country.flags.svg}">
    `;

    console.log(country);/* 
    console.log(country.flags.svg); */
} 