import bug from "../image/bug 1.png";
import electric from "../image/electric 1.png";
import dragon from "../image/dragon 1.png";
import dark from "../image/dark 1.png";
import fairy from "../image/fairy 1.png";
import fighting from "../image/fighting 1.png";
import fire from "../image/fire.png";
import flying from "../image/flying 1.png";
import ghost from "../image/ghost 1.png";
import grass from "../image/grass.png";
import ground from "../image/ground 1.png";
import ice from "../image/ice 1.png";
import normal from "../image/normal 1.png";
import poison from "../image/poison 1.png";
import psychic from "../image/psychic 1.png";
import rock from "../image/rock 1.png";
import steel from "../image/steel 1.png";
import water from "../image/water 1.png";

const getTypes = (type) => {
  switch (type) {
    case "bug":
      return bug;
    case "dark":
      return dark;
    case "dragon":
      return dragon;
    case "electric":
      return electric;
    case "fairy":
      return fairy;
    case "fighting":
      return fighting;
    case "fire":
      return fire;
    case "flying":
      return flying;
    case "ghost":
      return ghost;
    case "grass":
      return grass;
    case "ground":
      return ground;
    case "ice":
      return ice;
    case "normal":
      return normal;
    case "poison":
      return poison;
    case "psychic":
      return psychic;
    case "rock":
      return rock;
    case "steel":
      return steel;
    case "water":
      return water;
    default:
      return water;
  }
};

export default getTypes;
