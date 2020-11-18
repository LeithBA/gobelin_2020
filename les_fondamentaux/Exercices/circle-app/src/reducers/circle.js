const initialState = { circles: [], animateOdd: true };

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            const col = '#' + ((0.99 + Math.random() * 0.01) * 0xFFFFFF << 0).toString(16);
            const circle = {
                number: (state.circles.length + 1),
                color: col,
                animate: (state.animateOdd && (state.circles.length + 1) % 2 == 1 ? true : false)
            }
            return { ...state, circles: state.circles.concat(circle) };

        case 'SHUFFLE':
            return { ...state, circles: state.circles.sort(() => Math.random() - 0.5) };

        case 'STOP_ODD':
            state.circles.forEach(circle => {
                if (circle.number % 2 == 1)
                    circle.animate = false;
            });
            return { ...state, animateOdd: false };

        case 'START_ODD':
            state.circles.forEach(circle => {
                if (circle.number % 2 == 1)
                    circle.animate = true;
            });
            return { ...state, animateOdd: true };

        case 'RESET':
            return { ...state, circles: [] };

        default:
            return state;
    }
}

export { reducer, initialState };