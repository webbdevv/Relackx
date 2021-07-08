export function mapDateToString(date){
    if(!date) return
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let dateObj = date.toString().slice(0, 10).split("-")
    dateObj[1] = months[Number(dateObj[1]) - 1]
    return `${dateObj[1]} ${dateObj[2]}, ${dateObj[0]}`
}