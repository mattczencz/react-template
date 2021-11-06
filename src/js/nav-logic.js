// Imports
import * as Color from './colors'

// Function to handle the changing of nav colors based on prop
export const handleNavType = type => {
    // If type is undefined, set it to be default
    if(type === undefined) {
        return "background-color: #f9f9f9; color: #000;";
    }

    switch(type.toLowerCase()){
        case 'light':
            return `background-color: ${Color.mainWhite}; color: ${Color.mainBlack};`;
        case 'dark':
            return `background-color: ${Color.mainBlack}; color: ${Color.mainWhite};`;
        default:
            return "background-color: #f9f9f9; color: #000;";
    }
}