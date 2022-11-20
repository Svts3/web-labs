
export function addItemToCart(item) {
    return {
        type: "add_item",
        item: item
    };
}

export function deleteItemFromCart(item) {
    return {
        type: "delete_item",
        item: item
    }
}