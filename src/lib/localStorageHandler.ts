
export function saveToLocalStorage(key:string, data:string): boolean {
    if(getFromLocalStorage(key) === "") {
        return false;
    }

    localStorage.setItem(key, data);
    return true;
}

export function getFromLocalStorage(key:string) {
    let item = localStorage.getItem(key);

    if(item === null || item.length === 0) {
        return "";
    }
    return item;
}