export const moneyFormater = quantity =>{
    return quantity.toLocaleString('es-ES', {
        style: 'currency',
        currency: 'EUR'
    })
}