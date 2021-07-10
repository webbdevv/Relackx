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