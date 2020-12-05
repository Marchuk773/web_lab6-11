export const add = (payload) => {
    return {
        type: 'ADD',
        payload
    }
}

export const remove = (payload) => {
    return {
        type: 'REMOVE',
        payload
    }
}

export const increment = (payload) => {
    return {
        type: 'INCREMENT',
        payload
    }
}

export const decrement = (payload) => {
    return {
        type: 'DECREMENT',
        payload
    }
}