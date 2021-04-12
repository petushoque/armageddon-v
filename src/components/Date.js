let Data = new Date()

export const today = Data.toISOString().slice(0,10);

let tomorrow = new Date(Data.setDate(Data.getDate() + 6))

//ОЧЕНЬ ВАЖНО!!!!
//в строчке сверху считается не завтра, а через 10 дней

export const tomorrowDate = tomorrow.toISOString().slice(0,10);