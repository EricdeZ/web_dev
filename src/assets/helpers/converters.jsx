export const hslToHex = (h, s, l) => {
    l /= 100;
    const a = s * Math.min(l, 1 - l) / 100;
    const f = n => {
        const k = (n + h / 30) % 12;
        const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
        return Math.round(255 * color).toString(16).padStart(2, '0');
    };
    return `#${f(0)}${f(8)}${f(4)}`;
}

export const parseHslForCreateTheme = (hsl) => {
    return hslToHex(hsl.h, hsl.s, hsl.l)
}

export const hsvToRgb = (h, s, v) => {
    let r = 0, g = 0, b = 0;

    let i = Math.floor(h * 6);
    let f = h * 6 - i;
    let p = v * (1 - s);
    let q = v * (1 - f * s);
    let t = v * (1 - (1 - f) * s);

    switch (i % 6) {
        case 0:
            return [ v * 255, t * 255, p * 255 ]
        case 1:
            return [ q * 255, v * 255, p * 255 ]
        case 2:
            return [ p * 255, v * 255, t * 255 ]
        case 3:
            return [ p * 255, q * 255, v * 255 ]
        case 4:
            return [ t * 255, p * 255, v * 255 ]
        case 5:
            return [ v * 255, p * 255, q * 255 ]
        default:
            return [ r * 255, g * 255, b * 255 ]
    }
}

export const componentToHex = (c) => {
    const hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
}

export const rgbToHex = (rgb) => {
    return "#" + componentToHex(Math.round(rgb[0]))
        + componentToHex(Math.round(rgb[1]))
        + componentToHex(Math.round(rgb[2]));
}