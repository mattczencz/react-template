export const handleFlexJustify = fj => {
    // If there is no flex justify defined, set it to initial
    if(fj === undefined){
        return 'initial';
    }

    switch(fj.toLowerCase()){
        // Justify by location
        case 'start':
            return 'flex-start';
        case 'end':
            return 'flex-end';
        case 'center':
            return 'center';
        // Justify by space
        case 'between':
            return 'space-between';
        case 'around':
            return 'space-around';
        case 'evenly':
            return 'space-evenly';
        // Justify stretch
        case 'stretch':
            return 'stretch';
        // Justify by inheritance
        case 'inherit':
            return 'inherit';
        // Defaut: Set to initial
        default:
            return 'initial';
    }
}


export const handleBgColor = bgColor => {
    if (bgColor === undefined) {
        return '#fff'
    }

    switch(bgColor){
        case 'alt':
            return '#f8f8f8';
        default:
            return '#fff';
    }
}