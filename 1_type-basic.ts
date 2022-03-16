// 타입스크립트 기본 변수 타입

// JS 문자열 선언
// let str = "hello";

// TS 문자열 선언
// 변수명 오른쪽에 : 을 붙여주고, string 이라고 선언하면 됨.
// 이 말은, 'str_ts 라는 변수는 이제부터 문자열로 간주하겠다' 라는 뜻.
// 이것과 동일한 원리로 나머지 타입도 변수명 뒤에 타입을 선언해주면 됨.
let str: string = "hello";

// TS 숫자 선언
let num: number = 10;

// TS 배열 선언
// 위에 원시 타입들과는 다르게 대문자로 시작하는 Array 를 붙여줌.
// 그리고, <> 안에 number 라고 넣어주면,
// '이 변수의 타입은 배열이고, 그 배열에는 number 만 들어갈 수 있다' 라는 뜻.
let arr: Array<number> = [1, 2, 3];
let heroes: Array<string> = ["Capt", "Thor", "Hulk", 10]; // 여기에 만약 string 이 아닌 다른 타입이 요소로 들어가면 에러를 띄울거임.
let items: number[] = [1, 2, 3]; // 이렇게 배열 리터럴을 써주고, 앞에다 타입을 써도 위에 것과 동일한 타입으로 선언한 것임.
