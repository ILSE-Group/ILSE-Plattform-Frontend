

export function sanitizeInput(input: string): string {
    
    if(input == null || input == undefined || typeof(input) !== 'string') {
        return "";
    }
    let processedInput: string = input;
    processedInput = normalizeInput(processedInput);
    processedInput = escapeInput(processedInput);

    if(input.length <= 0) {
        return "";
    }
    return processedInput;
}

// remove invisible characters
function normalizeInput(input: string): string {

    let processedInput: string = input.trim();
    if(input.length <= 0) {
        return "";
    }

    // replace n spaces/tabs/newlines -> 1 space
    processedInput = processedInput.replace(/[ \t\r\n]+/g, ' ');

    // remove unicode chars except ascii, latin
    const illegalChar : RegExp =  /[^\u0000-\u007F\p{Script=Latin}]/gu;
    processedInput = processedInput.replace(illegalChar, '');
    
    
    return processedInput;
}

// escape special characters
function escapeInput(input: string): string {
    
    return input
        // HTML-chars
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        // quotations
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
        .replace(/`/g, '&#96;')
        // JS-chars 
        .replace(/\$\{/g, '&#36;{')
        .replace(/\//g, '&#47;');

}

