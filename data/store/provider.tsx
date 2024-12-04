import React, { useReducer } from 'react';
import RootContext from "./context";
import { initialState, CurrentCache, Action } from './types'; // Import from types.ts
import setReducer from './reducer'; // Directly import reducer

function ProviderTotal({ children }: { children: React.ReactNode }) {
    const [state, dispatch] = useReducer<React.Reducer<CurrentCache, Action>>(setReducer, initialState);

    return (
        <RootContext.Provider value={[state, dispatch]}>
            {children}
        </RootContext.Provider>
    );
}

export default ProviderTotal;