//helper to build image path if given one and a special one otherwise
export const buildMoviePath = (movie_path) => {
  return movie_path === null
    ? "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1325&q=80"
    : "https://image.tmdb.org/t/p/original" + movie_path;
};
