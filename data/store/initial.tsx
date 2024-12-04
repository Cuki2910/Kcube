//FIXME: NEED CHANGE IN NEW PJ: Add action types and action creators here
// export interface ExampleInitInter {
//     example: string;
// }
// export interface Action {
//     type: string;
//     payload?: any;
// }
// export const initialState: ExampleInit = {
//     example: 'example'
// };

import { UserFormat } from "../interfaceFormat";

export interface CurrentCache {
    user: UserFormat;
    currentGameLvl: number
    multiMode: 0 | 1 | 2
}

export interface Action {
    type: string;
    payload?: UserFormat | string | number;
}

export const initialState: CurrentCache = {
    user: {
        name: '',
        id: '',
        star: 10,
        best: [1, 2, 3]
    },
    currentGameLvl: 0,
    multiMode: 0
};