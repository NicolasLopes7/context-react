import { useCounter } from "../contexts/context"

export const IncrementButton = () => {
    const { increment } = useCounter()
    return (
        <button onClick={increment}>Increment</button>
    )
}