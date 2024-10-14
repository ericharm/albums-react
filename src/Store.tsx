import React, {
  useReducer,
  useEffect,
  createContext,
  Reducer,
  PropsWithChildren,
} from "react";
import { Action } from "./store/Action";
import { reducer } from "./store/reducer";
import { initialState, State } from "./store/State";

export const StateContext = createContext<State>(initialState);
export const DispatchContext = createContext<React.Dispatch<Action>>(
  ({ type, payload }): Action => ({ type, payload })
);

const Store = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer<Reducer<State, Action>>(
    reducer,
    initialState
  );

  const debug = true;

  useEffect(() => {
    if (debug)
      console.log("%c Store %o", "color: green; font-weight: bold;", state);
  }, [state, debug]);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  );
};

export default Store;
