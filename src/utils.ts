import { Dimensions } from 'react-native';
import { Colors } from './constants';

const { height, width } = Dimensions.get('window');

const guidelineBaseWidth = 360;
const guidelineBaseHeight = 592;

// Screen Sizes and Resolutions
export const scale = (size: number) => width / guidelineBaseWidth * size;
// width
export const wScale = (size: number) => height / guidelineBaseHeight * size;
// height
export const hScale = (size: number, factor: number = 0.5) => size + (scale(size) - size) * factor;

export const diff = (arr1: any[], arr2: any[]) => {
  var values: any[] = [];
  arr1.sort();
  arr2.sort();
  for (var i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) > -1) {
      values.push(arr1[i]);
    }
  }
  return values;
}

// Check backgroundColor pokedex
const POKEDEX_GREEN = ["Grass", "Poison"];
const POKEDEX_RED = ["Fire", "Flying"];
const POKEDEX_BLUE = ["Water", "Ice"];
const POKEDEX_YELLOW = ["Bug", "Normal", "Electric"];
const POKEDEX_VIOLET = ["Ground", "Fighting", "Psychic", "Rock"];
const POKEDEX_BROW = ["Ghost", "Dragon"];

export const checkBgPokedex = (type: any[]) => {
  if (diff(type, POKEDEX_GREEN).length) {
    return Colors.pokedex_green;
  }
  if (diff(type, POKEDEX_RED).length) {
    return Colors.pokedex_red;
  }
  if (diff(type, POKEDEX_BLUE).length) {
    return Colors.pokedex_blue;
  }
  if (diff(type, POKEDEX_YELLOW).length) {
    return Colors.pokedex_yellow;
  }
  if (diff(type, POKEDEX_VIOLET).length) {
    return Colors.pokedex_violet;
  }
  if (diff(type, POKEDEX_BROW).length) {
    return Colors.pokedex_brow;
  }
}