function Container() {
  let items = []
  let history = []

  this.add = function(arg) {
    items.push(arg)
    history.push(items.slice())
  }

  this.item = function() {
    console.log(items);
  }

  this.remove = function(arg) {
    var index = items.indexOf(arg);
    if (index >= 0) {
      items.splice(index, 1)
    }
    history.push(items.slice())
  }

  this.empty = function() {
    items = []
    history.push([])
  }

  this.replay = function() {
    console.log(history);
  }
}

let container = new Container();
container.add(2);
container.add(4);
container.remove(2);
container.empty();
container.add("hi");
container.replay()
