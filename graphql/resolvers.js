import {
  getMovies
} from "./db";
import {
  get
} from "https";

const resolvers = {
  Query: {
    movies: (_, {
      limit,
      rating
    }) => getMovies(limit, rating)
  }
}

/* const resolvers = {
  Query: {
    movies: () => getMovies(),
  }
}; */

export default resolvers;