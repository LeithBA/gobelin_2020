const initialState = { circles: [] };

const reducer = (state, action) => {
    console.log("REDUCER HEARD DISPATCH: " + action.type)

    switch (action.type) {
        case 'ADD':
            //circ.push(String(state.count + 1))
            const circle = {
                number: (state.circles.length + 1),
                color: ("#" + ((1 << 24) * (0.7 + Math.random() * 0.3) | 0).toString(16))
            }
            return { ...state, circles: state.circles.concat(circle) };
        case 'SHUFFLE':
            return { ...state, circles: shuffle(state.circles) };
        case 'STOP_ODD':
            return { ...state };
        case 'START_ODD':
            return { ...state };
        case 'RESET':
            return { ...state, circles: [] };
        default:
            return state;
    }
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


export { reducer, initialState };