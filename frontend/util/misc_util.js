export function mapDateToString(date){
    if(!date) return
    return date.slice(0, 15)
}

export function sortMessages(msgs){
    return msgs.sort((a, b) => a.created_at < b.created_at)
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
    return (subtractTime(time2, time1) < `00:${minutes}`)
}

function subtractTime(t1, t2){
    if(!t1 || !t2) return true
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
export function combineUsers(users){
    return users.map(u => u.first_name + " " + u.last_name).join(", ")
}
export function mouseX(evt) {
    if (evt.pageX) {
        return evt.pageX;
    } else if (evt.clientX) {
        return evt.clientX + (document.documentElement.scrollLeft ?
        document.documentElement.scrollLeft :
        document.body.scrollLeft);
    } else {
        return null;
    }
}

export function mouseY(evt) {
    if (evt.pageY) {
        return evt.pageY;
    } else if (evt.clientY) {
        return evt.clientY + (document.documentElement.scrollTop ?
        document.documentElement.scrollTop :
        document.body.scrollTop);
    } else {
        return null;
    }
}

export const fullName = (user) => {
    return user.first_name + " " + user.last_name
}

export const dateChange = (d1, d2) => {
    return d1 !== d2
}

export const todayOrYesterday = (d) => {
    var dateObj = new Date();
    var months = ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];
    var month = months[dateObj.getUTCMonth()]
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();
    let parts = d.split(" ")
    parts[1] = extractDays(parts[1])
    if(parts[0] == month && parts[1] == day && parts[2] == year){
        return "Today"
    } else if(parts[0] == month && parts[1] == (day - 1) && parts[2] == year){
        return "Yesterday"
    } else{
        return null
    }
}

function extractDays(s){
    let day = ""
    i = 0
    while(!isNaN(s[i]) && i < s.length - 1){
        day += s[i]
        i++
    }
    return day
}

export const userSubbed = (channelId, userId, subscriptions) => {
    let subs = subscriptions.filter(s => s.subscribable_id === channelId).map(s => s.subscriber_id)
    let res = subs.find(s => s === userId)
    return res
}

export const anySubscribed = (channels, userId, subscriptions) => {
    for(let i = 0; i < channels.length; i++){
        if(userSubbed(channels[i].id, userId, subscriptions) !== undefined){
            return channels[i]
        }
    }
    return false
}