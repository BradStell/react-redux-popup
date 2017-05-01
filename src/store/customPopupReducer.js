const FIRST_TRY = 'FIRST_TRY';

export default function customPopupReducer(props, action) {
    switch (action.type) {
        case FIRST_TRY:
            return {
                count: props.count + 1,
                someText: `you clicked the button ${props.count + 1} times`
            }
        default:
            return props || {someText: 'you clicked the button 0 times', count: 0};
    }
}