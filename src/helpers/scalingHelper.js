import {PixelRatio, Platform} from 'react-native';

export function ST(size) {
    return PixelRatio.getPixelSizeForLayoutSize(Platform.OS === "android" ? size - 0 : size);
}