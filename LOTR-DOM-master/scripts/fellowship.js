console.log("fellowship.js linked.");

// Our heroes
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

// Their compatriots
var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

// Their journey
var lands = ['The Shire', 'Rivendell', 'Mordor'];

// An example of using query selector
var body = document.querySelector('body');



// Part 1
function makeMiddleEarth() {
  var $main = document.createElement('main');

  // create a section tag with an id of middle-earth
  var $section = document.createElement('section');
  $section.setAttribute("id", "Middle-Earth");

  var $article = document.createElement('article');
  console.log($article)
  var $shire = document.querySelectorAll('article')[0];
  console.log($shire);
  $main.appendChild($section);

  // add each land as an article tag (add them one by one in a loop)
  for (var i = 0; i < lands.length; i++) {
    var $article = document.createElement('article');
    // inside each article tag include an h1 with the name of the land
    var $h1 = document.createElement('h1');
    $h1.textContent = lands[i];
    var nameinArray = lands[i].toLowerCase().split(" ");
    var nameNoSpace = nameinArray.join("-");

    // each article should also have a class equal to it's name ('Mordor' element should have a class of 'mordor', 'The Shire' should have a class of 'the-shire' - HINT: look up .split() and .join() for strings )
    $article.setAttribute("class", nameNoSpace);
    $article.appendChild($h1);
    $section.appendChild($article);
  }

  // append middle-earth to your document body
  body.appendChild($main);
}

makeMiddleEarth();


// Part 2
function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  let $shire = document.querySelectorAll('article')[0]

  let list = document.createElement('ul');
  $shire.appendChild(list);

  // each hobbit should be a list item, with text showing their name
  for (let i = 0; i < hobbits.length; i++) {
    let li = document.createElement('li');
    li.innerHTML = hobbits[i];
    list.appendChild(li);
    li.className = 'hobbit';
  }
  // give each hobbit a class of hobbit

}
makeHobbits()


// Part 3
function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  let theRing = document.createElement("div");
  theRing.setAttribute('id', 'the-ring');
  // give the div a class of 'magic-imbued-jewelry'
  theRing.setAttribute('class', 'magic-imbued-jewelry')
  console.log(theRing);
  // add the ring as a child of Frodo
  //hobbits[0].appendChild('theRing');
  //console.log(hobbits);
}
keepItSecretKeepItSafe();


// Part 4
function makeBuddies() {
  // create an aside tag
  let aside = document.createElement('aside');

  // attach an unordered list of each 'buddy' in the aside
  let list = document.createElement('ul')
  aside.appendChild(list);
  console.log(aside);

  for (let i = 0; i < buddies.length; i += 1) {
    let li = document.createElement('li')
    li.innerHTML = buddies[i];
    list.appendChild(li);
  }
  // insert your aside as a child element of rivendell
  let rivenedell = document.querySelector('.rivendell');
  rivenedell.appendChild(aside);
  //console.log(rivenedell);

}
makeBuddies();


// Part 5
function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  let change = document.querySelectorAll('article')
  let changePlace = change[1];
  let place = changePlace.getElementsByTagName('li');

  for (let i = 0; i < place.length; i += 1) {
    if (place[i].textContent == 'Strider') {
      place[i].textContent = 'Aragon';
    }
  }
  //console.log("place", place);

}
beautifulStranger();


// Part 6
function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  let hobbits = document.querySelector('article');
  let theShire = hobbits.getElementsByClassName('hobbit')
  let rivendell = document.querySelector('.rivendell').querySelector('ul');


  for (let i = 0; i < 4; i += 1) {
    rivendell.appendChild(theShire[0]);
  }
  //console.log('rivendell', rivendell)
  // how does appendChild work on an element that already exists on the page?
}
leaveTheShire();


// Part 7
function forgeTheFellowShip() {
  // create a new div with an id of 'the-fellowship'
  let theFellowship = document.createElement("div");
  theFellowship.setAttribute('id', "the-fellowship");

let rivendell = document.querySelector('.rivendell')

  let li = document.querySelectorAll('li')
  console.log(li);

  // add each hobbit and buddy one at a time to 'the-fellowship'
for(let i = 0; i < 9; i += 1) {
  rivendell.appendChild(li[i]);
}

  // after each character is added make an <a href="http://www.w3schools.com/jsref/met_win_alert.asp">alert</a> that they have joined your party
  // append the fellowship div to rivendell
  rivendell.appendChild(theFellowship);
  console.log(rivendell);
}
forgeTheFellowShip();


// Part 8
function theBalrog() {
let gandalfTheWhite = document.querySelector('li')

  // change the 'Gandalf' textNode to 'Gandalf the White'
  gandalfTheWhite.textContent = "Gandald the White";
  // apply style to the element
  gandalfTheWhite.style.fontSize = '20px';
  // add a gray 3px border

  // use documentation if you're unsure how to add style with javascript!
}
theBalrog();


// Part 9
function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  alert('blow the horn');
  // Boromir's been killed by the Uruk-hai!

  // Remove Boromir from the Fellowship
let x = document.querySelector(".rivendell").removeChild(document.querySelector(".rivendell").children[6]);
//console.log(x)
}
hornOfGondor();


// Part 10
function itsDangerousToGoAlone() {
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}
// itsDangerousToGoAlone();


// Part 11
function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}
// weWantsIt();

// Part 12
function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // Move all the hobbits back to the shire
}
// thereAndBackAgain();
