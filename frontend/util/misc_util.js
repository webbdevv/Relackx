export function mapDateToString(date){
    if(!date) return
    return date.slice(0, 15)
}

export function sortMessages(msgs){
    return msgs.sort((a, b) => a.created_at > b.created_at)
}

export function createTimestamp(time){
    if(!time) return null
    let newTime = time.slice(16).split(":")
    let suffix = ""
    if(newTime[0] > 12){
        suffix = "PM";
        newTime[0] -= 12
    } else {
        suffix = "AM"
    }
    return String(newTime[0]) + ":" + newTime[1] + " " + suffix
}

export function setClipboard(text){
    var type = "text/plain";
    var blob = new Blob([text], { type });
    var data = [new ClipboardItem({ [type]: blob })];

    navigator.clipboard.write(data).then((copy => (copy), err => (err)))
}

export function compareTime(time1, time2, minutes){
    return (subtractTime(time2, time1) < `0:${minutes}`)
}

function subtractTime(t1, t2){
    t1 = t1.split(":")
    t2 = t2.split(":")
    return `${t2[0] - t1[0]}:${t2[1] - t1[1]}`
}

export function checkDateChange(time1, time2){
    debugger
}

export function Search(param, users){
    param = param.toLowerCase()
    return users.filter(el => (el.first_name.toLowerCase() + " " + el.last_name.toLowerCase()).includes(param) || el.email.includes(param))
}