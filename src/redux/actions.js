export const ADD_TEMP = 'ADD_TEMP'
export const ADD_TEMPS= 'ADD_TEMPS'


export const addTemp = temp => {
    return {
        type: ADD_TEMP,
        payload: {
            temp
        }
    }

}

export const addTemps = temps => {
    return {
        type: ADD_TEMPS, 
        payload: {
            temps
        }
    }

}