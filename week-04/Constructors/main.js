function createDeck() {
  var suitArr = ['Clubs', 'Spades', 'Hearts', 'Diamonds']
  var cardArr = []

  function Card(suit, value) {
    this.suit = suit
    this.value = value
  }

  suitArr.forEach(function (s) {
    for (var i=2; i<=14; i++) {
      var card = new Card(s, i);
      cardArr.push( card );
    }
  })

  cardArr.forEach(function(card) {
    $('.card-container').append(`<div>${card.value} of ${card.suit}</div>`)
  })
}

function rollDice(s) {
  var roll = new Roll(s)
  var allProbs = getProbabilities(s)
  const rollDie = {
    selector: ".die-results",
    render: function () {
      return $(`<div>Rolled ${roll.sides}d6 for a total of: ${roll.value}</div>`);
    }
  };

  function Roll(sides) {
    this.sides = sides;
    this.value = 0;
    for (var i=sides; i>0; i--) {
      this.value += Math.ceil(Math.random() * 6);
    }
  }

  function getProbabilities(s) {
    results = {}
    startArr = []
    var totalSides = Number(s)
    for (var i=totalSides; i<=(s*6); i++) {
      startArr.push(i);
    }
    console.log(startArr)

    for (var i=0;i<1000;i++) {
      startArr.forEach(function(item) {
        var roll = new Roll(s)
        if (roll.value === item) {
          if (!results[item]) {
            results[item] = 1
          } else {
            results[item] += 1
          }
        }
      })
    }
    return results
  }

  function showProbabilities() {
    arr = []
    Object.keys(allProbs).forEach(function (key) {
      arr.push(`${key} is ${allProbs[key]}`)
    });
    return arr
  }

  $(rollDie.selector).append(rollDie.render);
  showProbabilities().forEach(function(item) {
    $(rollDie.selector).append('<div>' + item + '</div>')
  })
}

$('.create-deck').on('click', function() {
  createDeck();
});

$('.create-die').on('click', function() {
  rollDice(this.value);
});










// var suitArr = ['Clubs', 'Spades', 'Hearts', 'Diamonds']
//
// var matt = new Person('Matt', 'Rice', 29, 2, 'yay')
//
// matt = {
//   firstName: 'Matt',
//   lastName: 'Rice',
//   age: 29,
//   legs: 2,
//   happiness: 'yay'
// }
//
// console.log(matt.firstName + ' ' + matt.lastName);
// // 'Matt Rice'
