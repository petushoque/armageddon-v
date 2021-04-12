let Data = new Date()

export const today = Data.toISOString().slice(0,10);

let tomorrow = new Date(Data.setDate(Data.getDate() + 1))

export const tomorrowDate = tomorrow.toISOString().slice(0,10);