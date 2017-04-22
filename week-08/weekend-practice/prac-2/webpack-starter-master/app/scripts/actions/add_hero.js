export default function addHero(name, power) {
  return function(dispatch) {
    $.ajax({
      type: "POST",
      url: "http://tiny-za-server.herokuapp.com/collections/mattssuperheroes2",
      contentType: "application/json",
      data: JSON.stringify({
        name: name,
        power: power
      })
    }).then(response => {
      dispatch({
        type: "ADD_HERO",
        id: response._id,
        name: name,
        power: power
      });
    });
  };
}
