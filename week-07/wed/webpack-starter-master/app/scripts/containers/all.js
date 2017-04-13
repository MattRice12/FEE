export default {
  allState: function (state) {
    return state;
  },

  justScore: function (state) {
    return {
      score: state.score
    }
  },

  justUser: function (state) {
    return {
      username: state.username
    }
  }
}
