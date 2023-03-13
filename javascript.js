var quotes = [
    {name: "Selina to Dan, after he tries to get intel from Jonah (S1E5, \"Nicknames\")", quote: "That's like trying to use a croissant as a fucking dildo. Let me be more clear: It doesn't do the job, and it makes a fucking mess!"  },
    {name: "Amy\'s boyfriend, Ed, to Jonah, after he brags about his dick size and party habits (S2E6, \"Andrew\")", quote: "Jonah, you're not even a man. You're like an early draft of a man, where they just sketched out a giant mangled skeleton, but they didn't have time to add details, like pigment or self-respect. You're Frankenstein's monster, if his monster was made entirely of dead dicks."  },
    {name: "Selina to Mike, after learning he spent some time with Jonah (S3E2, \"The Choice\")", quote: "You let that unstable piece of human scaffolding into your house?"  },
    {name: "Selina to Jonah, for walking near her (S2E10, \"D.C.\")", quote: "Jonah! Hey, listen, settle something for me: You like to have sex and you like to travel? Then you can fuck off."  },
    {name: "Uncle Jeff to Jonah (S6E9, \"A Woman First\")", quote: "Shut the fuck up, you epileptic Picasso painting!"  }
];

function newQuote() {
  var quoteIndex = Math.floor(Math.random() * quotes.length);
  var quote = quotes[quoteIndex].quote;
  var name = quotes[quoteIndex].name;
  document.getElementById('quoteDisplay').innerHTML = quote;
  document.getElementById('nameDisplay').textContent = name;

  fadeIn(quoteDisplay);
  fadeIn(nameDisplay);

  quoteDisplay.innerHTML = randQuote.quote;
  nameDisplay.innerHTML = randQuote.name;
}


function fadeIn(element) {
  element.style.opacity = 0;
  let opacity = 0;
  const timer = setInterval(function() {
    if (opacity >= 1) {
      clearInterval(timer);
    }
    element.style.opacity = opacity;
    opacity += 0.1;
  }, 50);
}

document.addEventListener("keypress", function (event) {
  if (event.keyCode === 13) {
    newQuote();
  }

