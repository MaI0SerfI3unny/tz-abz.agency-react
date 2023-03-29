export const validateForm = ({name,email,phone,currentPosition,photo}) => {
    const validEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
    const validPhone = /(?=.*\+[0-9]{3}\s?[0-9]{2}\s?[0-9]{3}\s?[0-9]{4,5}$)/gm
    return  name && 
            name.length > 2 && 
            name.length < 60 && 
            validEmail.test(email) && 
            validPhone.test(phone) && 
            currentPosition.length !== 0 && 
            photo.length !== 0
}