interface IncrementAction{
    type: "increment"
}

interface DecrementAction{
    type: "decrement"
}

interface ResetAction{
    type: "reset"
}

export type Action = IncrementAction | DecrementAction | ResetAction