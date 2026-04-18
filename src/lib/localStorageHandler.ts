
export function saveToLocalStorage(key:string, data:string): boolean {
    if(key === null || key.trim().length == 0) {
        return false;
    }

    localStorage.setItem(key, data);
    return true;
}

export function getFromLocalStorage(key:string) : string {
    let item = localStorage.getItem(key);

    if(item === null || item.trim().length == 0) {
        return "";
    }
    return item;
}
