export const DECREMENT_COUNTER = Symbol('DECREMENT_COUNTER');
export const INCREMENT_COUNTER = Symbol('INCREMENT_COUNTER');

export const decrementCounter = (val) => ({
    type: DECREMENT_COUNTER,
    val
});

export const incrementCounter = (val) => ({
    type: INCREMENT_COUNTER,
    val
});

