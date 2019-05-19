import ACTIONS from "./action";

const defaultState = {
    isMenuOpen: false,
    user: {
        firstName: "Mateusz",
        lastName: "Dzieżok",
        amount: 1234.54,
        currency: "GBP",
        language: "en-GB"
    }
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
