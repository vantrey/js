//string revesce
function solution(str){
  var strMass=[];
  for (var i=0; i<str.length; i++) {
    strMass[i]=str[(str.length-1)-i];
  }
  return strMass.join('');
} // my solution

const solution = str => str.split('').reverse().join(''); // other solution

//smaller element
class SmallestIntegerFinder {
  findSmallestInt(args) {
    let min=args[0];
    for (let i=0; i<args.length; i++) {
      if (args[i]<min) {
        min=args[i];
        }
    }
    return min;
  }
}
