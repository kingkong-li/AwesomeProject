import { Dimensions, PixelRatio, Platform, } from 'react-native';

const window = Dimensions.get('window');

export default class LuckinScreenUnit {
    /*窗口尺寸，包含宽高*/
    static getWindowSize() {
        return window;
    }

    /*窗口宽*/
    static getWindowWidth() {
        return window.width;
    }

    /*窗口高*/
    static getWindowHeight() {
        return Platform.OS === 'ios' ? window.height : window.height - 20;
    }

    /*状态栏和导航栏高*/
    static getNavigationBarAndStatusHeight() {
        return Platform.OS === 'ios' ? window.height >= 812 ? 88 : 64 : 44;
    }

    /*状态栏高*/
    static getStatusBarHeight() {
        return Platform.OS === 'ios' ? window.height >= 812 ? 44 : 20 : 0;
    }

    /*底部高*/
    static getBottomHeight() {
        return Platform.OS === 'ios' ? window.height >= 812 ? 34 : 0 : 0;
    }

    /*tab高*/
    static getTabHeight() {
        return window.height >= 812 ? 83 : 49;
    }


    /*导航栏高*/
    static getNavigationBarHeight() {
        return 44;
    }

    static getFontScale() {
        return PixelRatio.getFontScale();
    }

    static getSpText(size = 15) {
        const DEFAULT_DENSITY = 2;
        const w2 = 750 / DEFAULT_DENSITY;
        const h2 = 1334 / DEFAULT_DENSITY;
        let scaleWidth = this.getWindowWidth() / w2;
        let scaleHeight = this.getWindowHeight() / h2;
        let scale = Math.min(scaleWidth, scaleHeight);
        let pixelRatio = PixelRatio.get();

        size = Math.round((size * scale + 0.5) * pixelRatio / this.getFontScale());
        return size;
    }

    /**
     * 屏幕适配,缩放size
     * @param size
     * @returns {Number}
     * @constructor
     */
    static getScaleSize(size = 1) {
        const DEFAULT_DENSITY = 2;
        const w2 = 750 / DEFAULT_DENSITY;
        const h2 = 1334 / DEFAULT_DENSITY;
        let scaleWidth = this.getWindowWidth() / w2;
        let scaleHeight = this.getWindowHeight() / h2;
        let scale = Math.min(scaleWidth, scaleHeight);
        size = Math.round((size * scale + 0.5));
        return size / DEFAULT_DENSITY;
    }
    /*获取字体大小*/
    static getFontSize(size = 15) {

        let scale = this.getWindowWidth() / 375.0;

        size = Math.round(size * scale + 0.5);

        return size;
    }
}