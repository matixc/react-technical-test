import ACTIONS from "./action";

const defaultState = {
    isMenuOpen: false
};

const menuReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ACTIONS.Types.TOOGLE_MENU: {
            return {
                ...state,
                isMenuOpen: !state.isMenuOpen
            };
        }

        default:
            return state;
    }
};

export default menuReducer;
