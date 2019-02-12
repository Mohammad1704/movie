import React, { Component } from 'react';
import Movie from './movie';
class MovieList extends Component {
  render() {
const movies = [
  {
    id: 1,
    title: "2001: A Space Odyssey",
    rating: "G",
    description: "After discovering a mysterious artifact buried beneath the lunar surface, mankind sets off on a quest to find its origins with help from intelligent supercomputer HAL 9000.",
    poster: "https://m.media-amazon.com/images/M/MV5BMmNlYzRiNDctZWNhMi00MzI4LThkZTctMTUzMmZkMmFmNThmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg",
    director: "Stanley Kubrick",
    cast: [
      {
        name: "Keir Dullea",
        role: "Dr. Dave Bowman"
      },
      {
        name: "Gary Lockwood",
        role: "Dr. Frank Poole"
      },
      {
        name: "William Sylvester",
        role: "Dr. Heywood R. Floyd"
      },
    ]
  },
  {
    id: 2,
    title: "Arrival",
    rating: "PG-13",
    description: "A linguist is recruited by the military to communicate with alien lifeforms after twelve mysterious spacecrafts land around the world.",
    poster: "https://m.media-amazon.com/images/M/MV5BMTExMzU0ODcxNDheQTJeQWpwZ15BbWU4MDE1OTI4MzAy._V1_UX182_CR0,0,182,268_AL_.jpg",
    director: "Denis Villeneuve",
    cast: [
      {
        name: "Amy Adams",
        role: "Louise Banks"
      },
      {
        name: "Jeremy Renner",
        role: "Ian Donnelly"
      },
    ]
  },
  {
    id: 3,
    title: "Interstellar",
    rating: "PG-13",
    description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    poster: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg",
    director: "Christopher Nolan",
    cast: [
      {
        name: "Matthew McConaughey",
        role: "Cooper"
      },
      {
        name: "Anne Hathaway",
        role: "Brand"
      },
      {
        name: "Jessica Chastain",
        role: "Murph"
      },
    ]
  },
  {
    id: 4,
    title: "Kingdom of Heaven",
    rating: "R",
    description: "Balian of Ibelin travels to Jerusalem during the Crusades of the 12th century, and there he finds himself as the defender of the city and its people.",
    poster: "https://m.media-amazon.com/images/M/MV5BMjE2MTIwNjg0MV5BMl5BanBnXkFtZTcwNjAxODIzMw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
    director: "Ridley Scott",
    cast: [
      {
        name: "Orlando Bloom",
        role: "Balian de Ibelin"
      },
      {
        name: "Liam Neeson",
        role: "Godfrey de Ibelin"
      },
    ]
  },
  {
    id: 5,
    title: "The Hitchhiker's Guide to the Galaxy",
    rating: "PG",
    description: "Mere seconds before the Earth is to be demolished by an alien construction crew, journeyman Arthur Dent is swept off the planet by his friend Ford Prefect, a researcher penning a new edition of \"The Hitchhiker's Guide to the Galaxy.\"",
    poster: "https://m.media-amazon.com/images/M/MV5BZmU5MGU4MjctNjA2OC00N2FhLWFhNWQtMzQyMGI2ZmQ0Y2YyL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
    director: "Garth Jennings",
    cast: [
      {
        name: "Martin Freeman",
        role: "Arthur Dent"
      },
      {
        name: "Zooey Deschanel",
        role: "Trillian"
      },
    ]
  },
  {
    id: 6,
    title: "Blade Runner",
    rating: "R",
    description: "A blade runner must pursue and terminate four replicants who stole a ship in space, and have returned to Earth to find their creator.",
    poster: "https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg",
    director: "Ridley Scott",
    cast: [
      {
        name: "Harrison Ford",
        role: "Rick Deckard"
      },
    ]
  },
  {
    id: 7,
    title: "A Beautiful Mind",
    rating: "PG-13",
    description: "After John Nash, a brilliant but asocial mathematician, accepts secret work in cryptography, his life takes a turn for the nightmarish.",
    poster: "https://m.media-amazon.com/images/M/MV5BMzcwYWFkYzktZjAzNC00OGY1LWI4YTgtNzc5MzVjMDVmNjY0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg",
    director: "Ron Howard",
    cast: [
      {
        name: "Russell Crowe",
        role: "John Nash"
      },
      {
        name: "Jennifer Connelly",
        role: "Alicia Nash"
      },
    ]
  },
  {
    id: 8,
    title: "Sunshine",
    rating: "R",
    description: "A team of international astronauts are sent on a dangerous mission to reignite the dying Sun with a nuclear fission bomb in 2057.",
    poster: "https://m.media-amazon.com/images/M/MV5BMTU5Nzg2OTk2NF5BMl5BanBnXkFtZTYwNTc1ODM3._V1_UX182_CR0,0,182,268_AL_.jpg",
    director: "Danny Boyle",
    cast: [
      {
        name: "Cillian Murphy",
        role: "Robert Capa"
      },
      {
        name: "Chris Evans",
        role: "Mace"
      },
    ]
  },
  {
    id: 9,
    title: "Edge of Tomorrow",
    rating: "PG-13",
    description: "A soldier fighting aliens gets to relive the same day over and over again, the day restarting every time he dies.",
    poster: "https://m.media-amazon.com/images/M/MV5BMTc5OTk4MTM3M15BMl5BanBnXkFtZTgwODcxNjg3MDE@._V1_UX182_CR0,0,182,268_AL_.jpg",
    director: "Doug Liman",
    cast: [
      {
        name: "Tom Cruise",
        role: "Cage"
      },
      {
        name: "Emily Blunt",
        role: "Rita"
      },
    ]
  },
];
    const movieComponents = movies.map( (movie) => <Movie movie= {movie} />);
    return (
      <div>
        { movieComponents }
      </div>
    );
  }
}
export default MovieList;