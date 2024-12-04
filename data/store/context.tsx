import { createContext } from "react";
import { CurrentCache, Action, } from "./index";
import { initialState } from "./initial";

const RootContext = createContext<[CurrentCache, React.Dispatch<Action>]>([initialState, () => null]);

export default RootContext; 