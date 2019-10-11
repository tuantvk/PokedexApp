import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

const guidelineBaseWidth = 360;
const guidelineBaseHeight = 592;

// Screen Sizes and Resolutions
export const scale = (size: number) => width / guidelineBaseWidth * size;
// width
export const wScale = (size: number) => height / guidelineBaseHeight * size;
// height
export const hScale = (size: number, factor: number = 0.5) => size + (scale(size) - size) * factor;


// Check backgroundColor pokedex
const POKEDEX_GREEN = ["Grass", "Poison"];
const POKEDEX_RED = ["Fire", "Flying"];
const POKEDEX_BLUE = ["Water", "Ice"];
const POKEDEX_YELLOW = ["Bug", "Normal", "Electric"];
const POKEDEX_VIOLET = ["Ground", "Fighting", "Psychic", "Rock"];
const POKEDEX_BROW = ["Ghost", "Dragon"];

export const checkBgPokedex = (type: string[]) => {

}