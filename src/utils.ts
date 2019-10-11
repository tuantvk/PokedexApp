import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

const guidelineBaseWidth = 360;
const guidelineBaseHeight = 592;


// https://github.com/ant-design/ant-design/blob/master/components/_util/type.ts
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export const tuple = <T extends string[]>(...args: T) => args;

export const tupleNum = <T extends number[]>(...args: T) => args;


// Screen Sizes and Resolutions
export const scale = (size: number) => width / guidelineBaseWidth * size;
// width
export const wScale = (size: number) => height / guidelineBaseHeight * size;
// height
export const hScale = (size: number, factor: number = 0.5) => size + (scale(size) - size) * factor;