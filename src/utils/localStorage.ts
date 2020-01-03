class LocalStorage {
    static getItem(key: string) {
        try {
            return localStorage.getItem(key);
        } catch (error) {
            return { done: false, message: 'Error', error };
        }
    }

    static setItem(key: string, value: string) {
        try {
            localStorage.setItem(key, value);
            return { done: true, message: 'Item was setted' };
        } catch (error) {
            return { done: false, message: 'Error', error };
        }
    }

    static removeItem(key: string) {
        try {
            localStorage.clearItem(key);
            return { done: true, message: 'Item was removed' };
        } catch (error) {
            return { done: false, message: 'Error', error };
        }
    }
    static clearStorage() {
        try {
            localStorage.clear();
            return { done: true, message: 'Storage was cleared' };
        } catch (error) {
            return { done: false, message: 'Error', error };
        }
    }
}

export default LocalStorage;
