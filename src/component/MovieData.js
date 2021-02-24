import movie1 from "../Assets/movie1.jpg";
import movie2 from "../Assets/movie2.jpg";
import movie3 from "../Assets/movie3.jpg";
import movie4 from "../Assets/movie4.jpg";

const moviesData = [
  {
    id: Math.random(),
    title: "Dark",
    img: movie1,
    rating: 3,
    description:
      "When two children go missing in a small German town its tragic past resurfaces Four families in search of children will have their routine turned upside down and each others secrets will be brought to light",
  },

  {
    id: Math.random(),
    title: "Riverdale",
    img: movie2,
    rating: 4,
    description:
      "Under its air of a small quiet town, Riverdale actually hides dark secrets As a new school year begins, young Archie Andrews and his friends see their daily life turned upside down by the mysterious death of Jason Blossom",
    video: "https://youtu.be/ks6z6v7IXkk",
    name: "fjjjjjjjjjn",
  },

  {
    id: Math.random(),
    title: "The Society ",
    img: movie3,
    rating: 4,
    description:
      "A group of teenagers are transported to a replica of their city after a school trip. The adults have disappeared without leaving a trace. At first, they enjoy freedom, but the first problems do not take long to appear",
  },
  {
    id: Math.random(),
    title: "Bates Motel",
    img: movie4,
    rating: 5,
    description:
      "After the death of her husband, Norma Bates decides to start a new life far from Arizona, in the small town of White Pine Bay in Oregon. She takes with her her 17-year-old son Norman, with whom she shares a complicated fusional relationship. But Norma does not intend to stop there ... So she will do everything to heal her past. Unfortunately between madness and despair, she no longer knows her direction, her children try as best they can to show her the way to the world in which she lives",
  },
];

export default moviesData;
