# JavaScript_block4
Javascript (0418 ~ 0501)

1. var, let, const의 차이
- 변수 선언방법: var, let, const.
- var : 변수 중복 선언 O

//var varName = "sky";  //함수 외부에서 선언됐을 경우 전역 변수가 된다
//console.log(varName);
//var varName = "earth";
//console.log(varName);
//if (true) {
//    var varName = "fire";
//}
//console.log(varName);

- let : 변수 중복 선언 X, 재할당 O
//let letName = "james";
//console.log(letName);
//let letName = "cameron";  //error message
//letName = "cameron";

- const : 변수 중복 선언 X, 재할당 X
//const constName = "charlie";
//console.log(constName);
//constName = "david";  //값 재할당 불가능


