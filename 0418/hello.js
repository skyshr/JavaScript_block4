alert("hello!!!");

// 변수명 이름 규칙
/*
    1. 알파벳, _, -, 숫자 (한글, 특수문자 권장 X)  
    2. camel 표기법
    3. 대소문자 구분
*/

console.log(varName);   // 호이스팅
var varName;
console.log(varName);

if (true) {
    var varName = "ssskkkyy";
}

console.log(varName);

let letName;
const constName = "sky";