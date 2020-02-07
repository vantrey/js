function solution(str){
  var strMass=[];
  for (var i=0; i<str.length; i++) {
    strMass[i]=str[(str.length-1)-i];
  }
  return strMass.join('');
} // my solution

const solution = str => str.split('').reverse().join(''); // other solution
