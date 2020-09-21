export const validateEmail = (email) => {
    var re = /\S{2}\S+@\S{2}\S+\.\S{1}\w+/;
    return re.test(email);
}

export const validatePrice = (price) => {
    var re = /^(\d+(?:[\.\,]\d{2})?)$/;
    return re.test(price);
}