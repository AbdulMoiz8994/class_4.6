export default function CounterReducer  (state, action)  {
    switch (action) {
    case 'INCREMENT':
    return state +1 

    default:
        return
    }
}
