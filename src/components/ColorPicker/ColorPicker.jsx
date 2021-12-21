import React, {useContext, useState} from "react";
import {Hue, Saturation} from "react-color/lib/components/common";
import {CustomPicker} from "react-color";
import {ThemeSwitcherContext} from "../../App";
import {hsv2hsl} from "../../assets/helpers/converters";
import {themes} from "../ThemeSwitcher/ThemeSwitcher";

export const createTheme = (switcher, element, color) => {
    element?.style?.setProperty('--hue', color.hsl.h)
    element?.style?.setProperty('--saturation', color.hsl.s * 100 + '%')
    element?.style?.setProperty('--lightness', color.hsl.l * 100 + '%')
    element?.style?.setProperty('--lightness', color.hsl.l * 100 + '%')
    // switch (color.hsl.l) {
    //     default:
    //         element?.style?.setProperty('--text-base-lightness', color.hsl.l * 100 + '%')
    // }
    switcher(themes.custom)
}

export const ColorPicker = () => {

    const {switcher, element} = useContext(ThemeSwitcherContext)
    const [current_color, setColor] = useState({
        hsv: {h:180,s:1,v:1},
        hsl: hsv2hsl({h:180,s:1,v:1})
    })

    return (
        <div className='color-picker-container'>
            <div className='box'>
                <div className='one'/>
                <div className='two'/>
                <div className='three'/>
            </div>
            <div className='saturation'>
                <Saturation hsl={current_color.hsv}
                            hsv={current_color.hsv}
                            onChange={
                                e => {
                                    setColor({
                                        hsv: e,
                                        hsl: hsv2hsl(e)
                                    })
                                    createTheme(switcher, element, current_color)
                                }
                            }
                />
            </div>
            <div className='hue'>
                <Hue hsl={current_color.hsv}
                     onChange={
                         e => {
                             setColor({
                                 hsv: {
                                     ...current_color.hsv,
                                     h: e.h,
                                     s: e.s
                                 },
                                 hsl: {
                                     ...current_color.hsl,
                                     h: e.h,
                                     s: e.s
                                 }
                             })
                             createTheme(switcher, element, current_color)
                         }
                     }
                />
            </div>
        </div>
    );
};

export default CustomPicker(ColorPicker);