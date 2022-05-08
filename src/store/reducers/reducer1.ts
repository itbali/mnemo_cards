type stateType = {}
type ActionsType = ReturnType<typeof someActionAC>

const initiaState = {}

export const reducer1 = (state:stateType, action:ActionsType):stateType=>{
    switch (action.type) {
        default:
            return state
    }
}

const someActionAC = ()=>{
    return {type:'123'} as const
}
