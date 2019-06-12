function countWords(str) {
  var newstr = str.toLowerCase().replace(/[^A-Za-z$_]/g, " ");
  var arr = newstr.split(" ");
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == '') {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr.length;
}
console.log(countWords("Good morning, I love JavaScript."));
