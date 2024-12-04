//FIXME: NEED CHANGE IN NEW PJ: Add action types and action creators here

import { UserFormat } from "../interfaceFormat";

// export const EXAMPLE = `EXAMPLE`;
// export const examplefnc = (item: any) => {
//     return {
//         type: EXAMPLE,
//         payload: item
//     }
// }

export const SET_USER = `SET_USER`;
export const currentSetUser = (user: UserFormat) => {
    return {
        type: SET_USER,
        payload: user
    }
}

export const SET_CURRENT_GAME_LVL = 'SET_CURRENT_GAME_LVL'
export const currentSaveGameLvl = (lvl: 0 | 1 | 2) => {
    return {
        type: SET_CURRENT_GAME_LVL,
        payload: lvl
    }
}

export const SET_CURRENT_MULTI_MODE = 'SET_CURRENT_MULTI_MODE'
export const currentSaveMultiMode = (mode: 0 | 1 | 2) => {
    return {
        type: SET_CURRENT_MULTI_MODE,
        payload: mode
    }
}