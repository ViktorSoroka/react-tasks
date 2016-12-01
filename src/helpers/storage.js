const storage = (() => {
    if (!window.localStorage) {
        throw new Error('This browser does not support localStorage');
    }

    const LS = window.localStorage;

    return {
        getItem(itemName) {
            return LS.getItem(itemName);
        },
        setItem(itemName, itemValue) {
            return LS.setItem(itemName, itemValue);
        },
        removeItem(itemName) {
            return LS.removeItem(itemName);
        }
    };
})();

export default storage;