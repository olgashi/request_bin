function guid(len) {
  let buffer = [];
  let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let charlen = chars.length;
  let length = len || 32;

  for (var i = 0; i < length; i++) {
      buffer[i] = chars.charAt(Math.floor(Math.random() * charlen));
  }

  return buffer.join('');
};

module.exports = {
  guid
};