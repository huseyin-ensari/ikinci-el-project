export const generateErrorMessage = (err) => {
    if (
        err.response.data.message[0].messages[0].message ===
        'Identifier or password invalid.'
    ) {
        return 'Email veya şifre hatalı';
    }
    if (
        err.response.data.message[0].messages[0].message ===
        'Email is already taken.'
    ) {
        return 'Bu email zaten kullanılıyor.';
    }
};
