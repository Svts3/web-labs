import { act } from "react-dom/test-utils";

const cartState = {
    items: []
}

export const cartReducer = (state = cartState, action) => {
    switch (action.type) {
        case "add_item":
            const arr = [...state.items];
            let flag = false;

            for (let i = 0; i < arr.length; i++) {
                if (arr[i].name == action.item.name) {
                    alert(action.item.name + " already in the cart!");
                    flag = true;
                    break;
                }
            }
            if (flag == false) {
                arr.push(action.item);
            }

            return { ...state, items: arr };
        case "delete_item":
            const arr2 = [...state.items].filter(item => item.id !== action.item.id);
            return { ...state, items: arr2 };
        default:
            return state;
    }

}