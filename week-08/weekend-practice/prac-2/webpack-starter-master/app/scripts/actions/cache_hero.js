export default function cacheHero(hero) {
  return function(dispatch) {
    dispatch({ type: "CACHE_HERO", hero: hero });
  };
}
