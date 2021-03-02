// https://pretty-rfc.herokuapp.com/RFC3986#reserved
// Includes all "reserved" characters (gen-delims / sub-delims)
// With '.' added to let values remain NATS-safe (future-profing)
export const reservedCharRegEx = /([:\/?#\[\]@!$&'()*+,;="<>%{}|\\^`.])+/g

// export const wsRegEx = /(\ )+/g
