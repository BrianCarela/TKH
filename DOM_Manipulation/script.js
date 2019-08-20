var quotes = [
  'I live my life a quarter mile at a time',
  'I said a ten-second car, not a ten-minute car',
  'You can have any brew you want... as long as it\'s a Corona.',
  'You almost had me? You never had me - you never had your car!',
  'I don\'t have friends. I have family.',
  'It don\'t matter if you win by an inch or a mile. Winning\'s winning.'
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  var randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();

  // Do all of your work inside the document.addEventListener

  // Part 1

  let title = () => {
    let mainTitle = document.getElementById('main-title');
    mainTitle.innerHTML = "Dom'\s New Page"
  }
  title();
  // Part 2
  let backgroundChange = () => {
    let colorChange = document.querySelector('body').style.background = '#ffffc5';
    //console.log(colorChange)
  }
  backgroundChange();
  //Part 3
  let favThings = () => {
    let sideBar = document.querySelector('.side-bar');
    console.log(sideBar)
    let favThings = sideBar.getElementsByTagName('li');
    favThings[5].style.display = 'none';
    console.log(favThings[5])
  }
  //favThings();
  // Part 4
  let specialTitles = () => {
    let titles = document.querySelectorAll('.special-title')
    console.log(titles);
    titles.forEach(title => title.style.fontSize = '2rem')
  }
  specialTitles();
  // Part 5
  let pastRaces = () => {
    let sideBar = document.querySelectorAll('.side-bar');
    let races = sideBar[1]
    let places = races.getElementsByTagName('li');
    places.filter(element, () => {
      if (element.innerHTML === 'Chicago') {
        element.style.display = 'none'
      }
    })
  }

  // Part 6
  function addLi(newLocation) {
    let location = document.querySelectorAll('.side-bar');
    let races = location[1];
    let ul = races.querySelector('ul');
    let places = races.getElementsByTagName('li');
    let newPlace = document.createElement('li');
    let newPlacetext = document.createTextNode(location);
    newPlace.appendChild(newPlacetext)
    ul.appendChild(newPlace);
  }
addLi('Durres')
  // Part 7
function newBlog() {
  let post = document.createElement('div')
  post.className = "blog-post purple";

  let title = document.createElement('h1')
  title.innerHTML = "the Bronx";

  let p = document.createElement('p')
  p.innerHTML = "I DROVE MY CAR INTO A BODEGA AND PICKED UP A BACONEGGANDCHEESE";
  console.log(p)

  let main = document.querySelector('.main')

  main.appendChild(post)
  post.appendChild(title)
  post.appendChild(p)
}
newBlog()
  // Part 8
function ranQuote() {
  let button = document.querySelector('#quote-title')
  console.log(button)
  button.addEvenListener("click", randomQuote)
}

  // Part 9




});
