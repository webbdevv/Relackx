export function mapDateToString(date){
    if(!date) return
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let dateObj = date.toString().slice(0, 10).split("-")
    dateObj[1] = months[Number(dateObj[1]) - 1]
    return `${dateObj[1]} ${dateObj[2]}, ${dateObj[0]}`
}

export function sortMessages(msgs){
    return msgs.sort((a, b) => a.created_at > b.created_at)
}

export function createTimestamp(time){
    if(!time) return null
    let newTime = time.slice(11, 16).split(":")
    let suffix = ""
    if(newTime[0] > 12){
        suffix = "PM";
        newTime[0] -= 12
    } else {
        suffix = "AM"
    }
    return String(newTime[0]) + ":" + newTime[1] + " " + suffix
}