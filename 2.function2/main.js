let str = 'tacocat'
function palindrome(message){
  const s = message.toLowerCase().replace(/[W_]/g,'');
    return s === s.split('').reverse().join('');
}
console.log(palindrome(str));