import React, {useState} from "react";
import Saturation from "react-color/lib/components/common/Saturation";
import Hue from "react-color/lib/components/common/Hue";
import {CustomPicker} from "react-color";
import {hsvToRgb, rgbToHex} from "../../assets/helpers/converters";

export const ColorPicker = ({ color, confirmChange}) => {

    const [current_color, setColor] = useState(color)

    return (
        <div className='color-picker-container'>
            <div className='hue'>
                <Hue hsl={current_color.hsv} onChange={e => {
                    // console.log(hslToHex(e.h, e.s, e.l))
                    setColor({...current_color,
                        hex: rgbToHex(hsvToRgb(e.h, current_color.hsv.s, current_color.hsv.v)),
                        hsv: {...current_color.hsv,
                            h: e.h
                        }
                    })
                }}/>
            </div>

            <div className='saturation'>
                <Saturation hsl={current_color.hsv}
                            hsv={current_color.hsv}
                            onChange={e => {
                                setColor({
                                    ...current_color,
                                    hex: rgbToHex(hsvToRgb(e.h, e.s, e.v)),
                                    hsv: e
                                })
                            }
                }/>
            </div>
            <button onClick={() => {

                console.log(current_color.hex)
                confirmChange(current_color.hex)
            }}>Confirm</button>
        </div>
    );
};

export default CustomPicker(ColorPicker);