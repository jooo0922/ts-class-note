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

// TS 튜플 선언
// 튜플은 뭐냐면, 앞에 배열과 그 안에 들어갈 요소의 타입이 숫자다, 문자열이다 이렇게 지정하는 걸 넘어서
// 배열안의 순서(인덱스) 별로 각각에 들어가는 요소의 타입을 일일이 지정해주는 걸 말함.
// '튜플 = 배열의 index 에 각각의 타입이 지정되어 있는 배열'
let address: [string, number] = ["gangnam", 100];

// TS 객체 선언
// 그런데 실제로 js 에서 대다수의 타입은 객체이기 때문에
// object 라고 타입을 지정하면 호환되는 변수들이 많을 것.
let obj: object = {};
// 그런데, 이 obj라는 객체안에 속성과, 그 속성의 값까지 타입을 정의하고 싶다면?
// let person: object = {
//   name: "capt",
//   age: 100,
// }; 요렇게 까지만 해줘도 '아 그럼 어쨋거나 이 변수는 object 구나' 라고 지정이 되기 때문에 문제가 없음.
let person: { name: string; age: number } = {
  // 이렇게 타입을 지정해주면, object 안에 들어가는 property와, 그것의 타입까지 구체적으로 지정을 해준 것.
  // 그래서, 만약 해당 객체 안에 해당하는 property 를 써주지 않는다면, ts는 이거에 대해서도 에러를 띄워줌.
  // 굉장히 구체적으로 타입 검사를 해준다는 것이지!
  name: "capt",
  age: 100,
};

// TS 진위값 선언
let show: boolean = true;
