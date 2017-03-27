$(document).ready(function() {
  var pokeOne = createPokemon('squirtle', true);
  // console.log(pokeOne)
  // var pokeTwo = createPokemon('pikachu', false);
  var $container = $('.container')

  // $container.append(renderPlayer(pokeOne))
  // $container.append(renderPlayer(pokeTwo))

  function createPokemon(name, player) {
    // var poke;
    $poke = $.ajax({
      type: 'GET',
      url: `http://pokeapi.co/api/v2/pokemon/${name}`,
      dataType: 'json'
    }).done(function(data) {
      return data
    })
      // var pokeMove;
      // $.ajax({
      //   type: 'GET',
      //   url: pokemon.moves[0].move.url,
      //   dataType: 'jsonp',
      //   success: function(move, status, xhr) {
      //     console.log(move)
      //     pokeMove = move
      //   }
      // })
      // pokemon.move = pokeMove
    // })
    console.log($poke)
    return $poke
  }

  // new Character(pokemon, move, player)
  // $container.append(renderPlayer(poke))

  function Character(pokemon, move, player) {
    'use strict';
    this.name  = pokemon.name
    this.move  = pokemon.moves[0].move.name
    this.damage = move.power
    this.health = 100

    if (player) {
      this.image = pokemon.sprites.back_default
    } else {
      this.image = pokemon.sprites.front_default
    }
  }

  Character.prototype.attack = function(pokeOne, pokeTwo) {
    if (this.name === pokeOne.name) {
      pokeTwo.health -= this.damage
      $(".container").find(".character").last().replaceWith(renderPlayer(pokeOne)[0])
    } else {
      pokeOne.health -= this.damage
      $(".container").find(".character").first().replaceWith(renderPlayer(pokeOne)[0])
    }
  }

  function renderPlayer(pokemon) {
    var playerBlock = $(`
      <div class="character">
        <img src=${pokemon.image} />
        <button>Attack</button>
        <h3>${pokemon.name}</h3>
        <p>Health: ${pokemon.health}</p>
        <p>Move: ${pokemon.move}</p>
        <p>Damage: ${pokemon.damage}</p>
      </div>
    `)

    var attackButton = playerBlock.find('button')
    $(attackButton).on('click', function() {
      pokemon.attack(pokeOne, pokeTwo);
    })
    return playerBlock
  }
})
