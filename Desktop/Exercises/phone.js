function phoneNumber(str) {
  var RegExp = /[0-9]/g;
  var match = str.match(RegExp)

  if(match[0] == "1"){
    return match.slice(1).join("");
  }else
  return match.join("");
}
console.log(phoneNumber("+1 (613)-995-0253"))
console.log(phoneNumber("613-995-0253"))
console.log(phoneNumber("1 613 995 0253"))
console.log(phoneNumber("613.995.0253"))

