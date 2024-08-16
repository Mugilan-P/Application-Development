
export function getUser() {
    return JSON.parse(localStorage.getItem('user') ?? undefined) || {}
}

export function isAuthenticated() {
    if (!localStorage.getItem('user')) {
        return false;
    }

    try {
        JSON.parse(localStorage.getItem('user'));
        return true;
    } catch {
        return false;
    }
}