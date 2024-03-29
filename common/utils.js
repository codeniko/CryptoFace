// Add zero in front of numbers < 10
export function zeroPad(i) {
    if (i < 10) {
        i = '0' + i
    }
    return i
}

// Add zero at end of decimals
export function zeroPadDecimal(i) {
    const str = i.toString()
    const decimalIndex = str.indexOf('.')
    const decimalDiff = str.length - decimalIndex - 1
    if (decimalIndex < 0) {
        return str + '.00'
    } else if (decimalDiff === 1) {
        return str + '0'
    }
    return str
}

export function round(value, numDecimals = 0) {
    const shift = Math.pow(10, numDecimals)
    return Math.floor(value * shift) / shift
}

export function getLastUpdateTimeString(lastUpdated, cur) {
    if (lastUpdated <= 0) {
        return ''
    }

    const diffMinutes = Math.floor((cur - lastUpdated) / 60000)
    if (diffMinutes <= 0) return `recently`
    if (diffMinutes == 1) return `1 minute ago`
    if (diffMinutes < 1440) return `${diffMinutes} minutes ago`
    const diffDays = Math.floor(diffMinutes / 1440)
    return `${diffDays} days ago`
}

export function timestamp() {
    return +new Date()
}

// Generate UUID v4 https://gist.github.com/codeniko/7b24fb4d94530188c5f68599ffddf452
export function uuidv4(a) {
    return a ? (a ^ Math.random() * 16 >> a / 4).toString(16) : ([ 1e7 ] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, uuidv4)
}
