export default function generatePassword(length: number): string {
    let string = '';
    for (let i = 0; i < 10; i++) {
        string += Math.random().toString(36).replace(/[^a-z]+/g, '');
        if (string.length >= length) break;
    }
    return string.substring(0, length);
}