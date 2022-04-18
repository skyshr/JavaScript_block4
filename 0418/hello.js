alert("hello!!!");

// 숫자형
/*
    10진수

    255

    - 2진수 (0b11111111), 
    
    - 8진수 (0o377), 
    
    - 16진수 (0xff)
*/
let num = 255;
console.log(num.toString(2));
console.log(num.toString(8));
console.log(num.toString(7));
console.log(num.toString(16));

let randomNum = Math.random() * 10;  // 0.0 ~ 1.0 사이의 랜덤한 값(난수)
console.log(randomNum);

console.log(Math.floor(randomNum));
console.log(Math.ceil(randomNum));
console.log(Math.round(randomNum));

/* 
    3~10 사이의 랜덤한 값을 출력
*/

let random = Math.floor(Math.random()*8) + 3;
console.log("정답: " + random);
let inputData = prompt("정답을 입력하세요.", 10);
if (inputData == random) alert("정답입니다!!");
else alert("오답입니다!!");

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