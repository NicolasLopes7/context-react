import { useCounter } from "../contexts/context"

export const Counter = () => {
    const { counter } = useCounter()

    return (
        <span>Clicked {counter} times</span>
    )
}