
export function saveToSessionStorage(key:string, data:string): boolean {
    if(key === null || key.trim().length == 0) {
        return false;
    }

    sessionStorage.setItem(key, data);
    return true;
}

export function getFromSessionStorage(key:string) : string {
    let item = sessionStorage.getItem(key);

    if(item === null || item.trim().length == 0) {
        return "";
    }
    return item;
}
