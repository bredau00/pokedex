fetch("https://pokeapi.co/api/v2/pokemon/charizard")
  .then((response) => {
    console.log("resolve", response);
    return response.json();
  })
  .then((data) => {
    console.log(data);
    document.getElementById(
      "data"
    ).innerHTML += `<div><img src="${data.sprites.other["official-artwork"].front_default}"> <li>${data.name}</li></div>`;
  })
  .catch((err) => {
    console.log("resolve", err);
  });

fetch("https://pokeapi.co/api/v2/pokemon/3/")
  .then((response) => {
    console.log("resolve", response);
    return response.json();
  })
  .then((ven) => {
    console.log(ven);
    document.getElementById(
      "ven"
    ).innerHTML += `<div><img src="${ven.sprites.other["official-artwork"].front_default}"> <li>${ven.name}</li></div>`;
  })
  .catch((err) => {
    console.log("resolve", err);
  });

fetch("https://pokeapi.co/api/v2/pokemon/9/")
  .then((response) => {
    console.log("resolve", response);
    return response.json();
  })
  .then((bull) => {
    console.log(bull);
    document.getElementById(
      "bull"
    ).innerHTML += `<div><img src="${bull.sprites.other["official-artwork"].front_default}"> <li>${bull.name}</li></div>`;
  })
  .catch((err) => {
    console.log("resolve", err);
  });
