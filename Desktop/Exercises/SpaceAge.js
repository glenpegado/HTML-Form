//                            VERSION 1

//Earth
function earth(num) {
 var round = num/31555695.803092458188703
 return parseFloat(round).toFixed(2) + " Earth Years Old"
}

//Mercury
function mercury(num) {
 var round = num/7600525.804614070065508
 return parseFloat(round).toFixed(2) + " Mercury Years Old";
}

//Venus
function venus(num) {
 var round = num/19411026.175869120654397
 return parseFloat(round).toFixed(2) + " Venus Years Old";
}

//Mars
function mars(num) {
 var round = num/59359776.789808917197452
 return parseFloat(round).toFixed(2) + " Mars Years Old";
}

//Jupiter
function jupiter(num) {
 var round = num/374222565.145228215767635
 return parseFloat(round).toFixed(2) + " Jupiter Years Old";
}

//Saturn
function saturn(num) {
 var round = num/928792569.659442724458204
 return parseFloat(round).toFixed(2) + " Saturn Years Old";
}

//Uranus
function uranus(num) {
 var round = num/2652994591.735537190082645
 return parseFloat(round).toFixed(2) + " Uranus Years Old";
}

//Neptune
function neptune(num) {
 var round = num/5196280668.354430379746835
 return parseFloat(round).toFixed(2) + " Neptune Years Old";
}

function spaceAge(num, name) {
 return name(num);
}
console.log(spaceAge(8210123456, neptune));









//                            VERSION 2

//Earth
function earth(num) {
 var round = num/31555695.803092458188703;
 return 'Earth: ' + parseFloat(round).toFixed(2)
}
console.log(earth(24300000000));

//Mercury
function mercury(num) {
 var round = num/7600525.804614070065508
 return 'Mercury: ' + parseFloat(round).toFixed(2)
}
console.log(mercury(10000000))

//Venus
function venus(num) {
 var round = num/19411026.175869120654397
 return 'Venus: ' + parseFloat(round).toFixed(2)
}
console.log(venus(189839836))

//Mars
function mars(num) {
 var round = parseFloat(num).toFixed(2);
 return 'Mars: ' + round/59359776.789808917197452
}
console.log(mars(2329871239))

//Jupiter
function jupiter(num) {
 var round = parseFloat(num).toFixed(2);
 return 'Jupiter: ' +round/374222565.145228215767635
}
console.log(jupiter(901876382))

//Saturn
function saturn(num) {
 var round = parseFloat(num).toFixed(2);
 return 'Saturn: ' +round/928792569.659442724458204
}
console.log(saturn(3000000000))

//Uranus
function uranus(num) {
 var round = parseFloat(num).toFixed(2);
 return 'Uranus: ' +round/2652994591.735537190082645
}
console.log(uranus(3210123456))

//Neptune
function neptune(num) {
 var round = parseFloat(num).toFixed(2);
 return 'Neptune: ' +round/5196280668.354430379746835
}
console.log(neptune(8210123456))









//                            VERSION 3

function spaceAge (sec) {
 var round = parseFloat(sec * 100).toFixed(2)
 var allPlanets = {
   Earth: parseFloat(round/31555695.803092458188703).toFixed(2),
   Mercury: parseFloat(round/7600525.804614070065508).toFixed(2),
   Venus: parseFloat(round/19411026.175869120654397).toFixed(2),
   Mars: parseFloat(round/59359776.789808917197452).toFixed(2),
   Jupiter: parseFloat(round/374222565.145228215767635).toFixed(2),
   Saturn: parseFloat(round/928792569.659442724458204).toFixed(2),
   Uranus: parseFloat(round/2652994591.735537190082645).toFixed(2),
   Neptune: parseFloat(round/5196280668.354430379746835).toFixed(2),
 }
 for (var i in allPlanets) {
 }
 return allPlanets
}
console.log(spaceAge(10000000))
