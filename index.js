const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(catName){

    cats.push(catName);

    return cats;
}

beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

function destructivelyPrependCat(catName){

    cats.unshift(catName); 

    return cats;
}

beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

  function destructivelyRemoveLastCat(catName){

    cats.pop(catName);

    return cats;
  }

  beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

function destructivelyRemoveFirstCat(){

    cats.shift()

    return cats;
}

beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

function appendCat(catName){

    const catNames = [...cats, catName];

    return catNames;
}

beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

function prependCat(catName){

    const catNames = [catName, ...cats];

    return catNames;
}

function removeLastCat(catName){

    const catNames = cats.slice(0, cats.length - 1)

    return catNames
}

beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

  function removeFirstCat(catName){

    const catNames = cats.slice(1);

    return catNames;
  }