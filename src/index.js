import * as colors from './colors';

const color = (code, arrayColors) => {
    for (let i = 0; i < arrayColors.length; i++) {
        let array = arrayColors[i].split(' ');
        let itemCode = array[0];
        if (code === itemCode) {
            return array[1];
        }
    }
    return null;
};

const textColor = (code, theme) => {
    switch (theme) {
        case 'deepPurple':
            return (code === 'lightText') ? color('900', colors.grey) :
                color('200', colors.grey);
        case 'indigo':
            return (code === 'lightText') ? color('900', colors.grey) :
                color('200', colors.grey);
        case 'blue':
            return (code === 'lightText') ? color('900', colors.grey) :
                color('200', colors.grey);
        case 'lightBlue':
            return (code === 'lightText') ? color('900', colors.grey) :
                color('200', colors.grey);
        case 'cyan':
            return (code === 'lightText') ? color('900', colors.grey) :
                color('200', colors.grey);
        case 'teal':
            return (code === 'lightText') ? color('900', colors.grey) :
                color('200', colors.grey);
        case 'green':
            return (code === 'lightText') ? color('900', colors.grey) :
                color('200', colors.grey);
        case 'lightGreen':
            return (code === 'lightText') ? color('900', colors.grey) :
                color('200', colors.grey);
        case 'amber':
            return (code === 'lightText') ? color('900', colors.grey) :
                color('900', colors.grey);
        case 'orange':
            return (code === 'lightText') ? color('900', colors.grey) :
                color('900', colors.grey);
        case 'deepOrange':
            return (code === 'lightText') ? color('900', colors.grey) :
                color('200', colors.grey);
        case 'grey':
            return (code === 'lightText') ? color('900', colors.grey) :
                color('200', colors.grey);
        case 'blueGrey':
            return (code === 'lightText') ? color('900', colors.grey) :
                color('200', colors.grey);
        default:
            return (code === 'lightText') ? color('900', colors.grey) :
                color('200', colors.grey);
    }
};

export const getColor = (code, theme) => {
    if (code === 'lightText' || code === 'darkText') {
        return textColor(code, theme);
    }

    switch (theme) {
        case 'deepPurple':
            return color(code, colors.deepPurple);
        case 'indigo':
            return color(code, colors.indigo);
        case 'blue':
            return color(code, colors.blue);
        case 'lightBlue':
            return color(code, colors.lightBlue);
        case 'cyan':
            return color(code, colors.cyan);
        case 'teal':
            return color(code, colors.teal);
        case 'green':
            return color(code, colors.green);
        case 'lightGreen':
            return color(code, colors.lightGreen);
        case 'amber':
            return color(code, colors.amber);
        case 'orange':
            return color(code, colors.orange);
        case 'deepOrange':
            return color(code, colors.deepOrange);
        case 'grey':
            return color(code, colors.grey);
        case 'blueGrey':
            return color(code, colors.blueGrey);
        default:
            return color(code, colors.grey);
    }
};

/**
 * Get a random integer between `min` and `max`.
 *
 * @param {number} min - min number
 * @param {number} max - max number
 * @return {int} a random integer
 */
const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const pickRandomTheme = () => {
    let num = getRandomInt(0, 12);

    switch (num) {
        case 0:
            return 'deepPurple';
        case 1:
            return 'indigo';
        case 2:
            return 'blue';
        case 3:
            return 'lightBlue';
        case 4:
            return 'cyan';
        case 5:
            return 'teal';
        case 6:
            return 'green';
        case 7:
            return 'lightGreen';
        case 8:
            return 'amber';
        case 9:
            return 'orange';
        case 10:
            return 'deepOrange';
        case 11:
            return 'grey';
        case 12:
            return 'blueGrey';
        default:
            return 'grey';
    }
};

export const color900 = () => getColor('900', pickRandomTheme());
export const color800 = () => getColor('800', pickRandomTheme());
export const color700 = () => getColor('700', pickRandomTheme());
export const color600 = () => getColor('600', pickRandomTheme());
export const color500 = () => getColor('500', pickRandomTheme());
export const color400 = () => getColor('400', pickRandomTheme());
export const color300 = () => getColor('300', pickRandomTheme());
export const color200 = () => getColor('200', pickRandomTheme());
export const color100 = () => getColor('100', pickRandomTheme());
export const color50 = () => getColor('50', pickRandomTheme());
export const colorA100 = () => getColor('A100', pickRandomTheme());
export const colorA200 = () => getColor('A200', pickRandomTheme());
export const colorA400 = () => getColor('A400', pickRandomTheme());
export const colorA700 = () => getColor('A700', pickRandomTheme());
export const lightText = () => getColor('lightText', pickRandomTheme());
export const darkText = () => getColor('darkText', pickRandomTheme());