import { PropsWithChildren, createContext, useContext, useState } from "react";

type Counter = { counter: number; increment: () => void };

const INITIAL_STATE: Counter = {
    counter: 0,
    increment: () => {}
};

export const CounterContext = createContext<Counter>(INITIAL_STATE);

export const CounterProvider = ({ children }: PropsWithChildren) => {
    const [counter, setCounter] = useState(0);

    const increment = () => setCounter((prev) => prev + 1);

    return (
        <CounterContext.Provider value={{counter, increment}}>
            {children}
        </CounterContext.Provider>
    )
}

export const useCounter = () => {
    const context = useContext(CounterContext);
  
    if (!context)
      throw new Error("useCounter must be called inside UseCounterProvider");
  
    return context;
  };