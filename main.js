// let input = [17, 15, 8];
// function isRightTriangle (x) {
//   let long = Math.pow(x[0],2)
//   let short = Math.pow(x[1],2) + Math.pow(x[2],2);
//   if(long === short) {
//     return true;
//   }
//   return false;
// }
// console.log(isRightTriangle(input));

// var a = 7

// function scope() {
//   if (true) {
//     //할당은 호이스팅되지 않는다.
//     console.log(a) //undefined 
//     const b = 123; 
//     var c = 456;
// 	  var a = 2;	
//     //a는 if문의 지역변수
//     //블록레벨의 범위를 가진다. 
//     //전역 변수 a가 있어도 undefined인 이유는 스코프체이닝 전에 자신의 innerscope에서 변수a를 발견했기 때문에!
//   } 
//   // console.log(b) //scope 에러 
//   console.log(c) //456
// }
// scope();

const introduce = {
  name: "Zeeyoon",
  age : 27,
  skills : ["JS", "HTML", "CSS", "React"],
  mul : function (num1, num2) {return num1 * num2},
}
//객체데이터 접근방법
console.log(introduce["name"]);  //Zeeyoon
console.log(introduce.age);	   //27
