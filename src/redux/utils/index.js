export function isPromise(value) {
  if (value !== null && typeof value === 'object') {
    return value.promise && typeof value.promise.then === 'function'
  }
}

export function getCookie(name) {
  let value = ' ' + document.cookie
  let parts = value.split(' ' + name + '=')
  if (parts.length == 2) return parts.pop().split('').shift()
}
