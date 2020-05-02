import {createContext} from "react";

export const DataContext = createContext({text: '', displayPopUp: (val: boolean) => {}})