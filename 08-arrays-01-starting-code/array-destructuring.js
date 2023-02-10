const nameData = ['Felipe', 'Davi', 30, 'Belo Horizonte']
// const firstName = nameData[0]
// const lastName = nameData[1] Another way to do this...


const [firstName, lastName, ...data] = nameData

console.log(firstName,  lastName, data);