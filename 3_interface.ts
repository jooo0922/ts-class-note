/**
 * 중복되는 긴 타입에 대해서
 * 하나의 interface로 정의하고,
 * 그것을 변수, 파라미터 등의 타입 정의 시 사용함.
 *
 * 이렇게 함으로써
 * 누구나 interface 를 사용하게 되면
 * 동일한 규칙을 사용하게 되는,
 * 일종의 '상호간의 약속'을 정하는 것임.
 *
 * todo 프로젝트 만들때도 사용했었지!
 */

interface User {
  age: number;
  name: string;
}

// 변수에 인터페이스 활용
/**
 * 따라서 seho 라는 변수는
 * 사전에 interface 로 정의해놓은 상호간의 약속에 따라
 * 무조건, age와 name 이라는 속성값을 지정해둔 타입에 맞게 써줘야 함.
 */
const seho: User = {
  age: 33,
  name: "세호",
};

// 함수에 인터페이스 활용
/**
 * 함수에 인터페이스를 사용한다는 것은,
 * 파라미터에 항상 특정 형식만 받겠다는
 * 상호간의 약속을 인터페이스를 이용해서
 * 지정하는 것으로 생각하면 됨.
 *
 * 앞으로 특히 함수에
 * 인터페이스를 활용할 일이 정말 많을 것.
 *
 * 타입스크립트에서 가장 많이 활용하는
 * 인터페이스 구조!
 *
 * 함수의 파라미터에 인터페이스를 정의하고,
 * 함수 호출 시 그 인자가 파라미터에 정의한
 * 인터페이스의 규칙을 잘 따르는지 확인하는 것이
 * 타입스크립트의 역할!
 */
function getUser(user: User) {
  console.log(user);
}
const capt = {
  age: 100,
  name: "캡틴",
};
getUser(capt);

/**
 * 인터페이스가 많이 활용되는 구조
 *
 * 특히 타입스크립트로 정의된 프레임워크를
 * 가져와서 사용할 때,
 *
 * 가져와서 사용하려는 API 의 스펙이 어떻다,
 * 데이터 모양이 어떻다 라는 것을
 * 인터페이스로 정의하여 활용하는 형식이
 * 가장 많이 사용되고 있음.
 */

// 함수의 스펙(구조)에 인터페이스를 활용
/**
 * 아래와 같이
 * 함수의 구조, 스펙을 정의하는 데에도
 * 인터페이스가 사용됨.
 *
 * () 소괄호 안에
 * 함수가 받을 인자의 타입을 지정하고,
 * 그 옆에 함수가 리턴해주는 값의 타입을 지정하는
 * 형태로 함수의 타입 구조(?) 를 정의할 수 있음.
 *
 * 이런 방식은
 * 주로 라이브러리를 만든다거나,
 * 여러 명이서 동시에 협업을 할 때,
 * '이 함수의 규칙은 이렇게 만들자' 라고
 * 잡아놓고 거기서부터 출발하는 식으로 사용하는 경우가 많음.
 */
interface SumFunction {
  (a: number, b: number): number;
}

let sum2: SumFunction;
sum2 = function (a: number, b: number): number {
  return a + b;
}; // 그래서 sum2 변수에 함수를 정의하여 넣어줄 때, SumFunction 에서 정의한 인터페이스 구조를 따라야 에러가 안뜸.

// 인덱싱
/**
 * 아래와 같이 배열의 인덱스 타입과
 * 해당 인덱스의 요소 타입을 인터페이스로
 * 정의할 수도 있음.
 */
interface StringArray {
  // 배열의 인덱스는 당연히 숫자일 것이고, 그 요소의 타입은 문자열로 정의함.
  [index: number]: string;
}

const arr: StringArray = ["a", "b", "c"];
// arr[0] = 10; // 10은 문자열이 아니므로, StringArray 인터페이스로 정의된 arr 에는 들어갈 수 없음.

// 딕셔너리 패턴
/**
 * 앞서 살펴본 인덱싱과 유사한 방식
 *
 * 아래와 같이 객체의 key 타입과
 * 해당 key의 value 를 정규표현식으로 정의하는
 * 인터페이스를 사용할 수 있음.
 */
interface StringRegexDictionary {
  [key: string]: RegExp;
}

const obj: StringRegexDictionary = {
  // sth: /abc/,
  cssFile: /\.css$/,
  jsFile: /\.js$/,
};
// obj['cssFile'] = 'a' // 'a' 는 정규표현식이 아니므로, 인터페이스 정의에 어긋나서 에러가 남.

// 딕셔너리 패턴의 장점은 이런 식으로
// key값들만 모아놓은 배열을 forEach 같은 배열 API로 돌릴 때,
// 내부의 콜백함수가 받은 인자의 타입까지 자동으로 타입스크립트가 타입 추론을 해줌!
Object.keys(obj).forEach(function (value) {});

// 인터페이스 확장(상속)
/**
 * 인터페이스 확장은
 * 기본적으로 OOP 에서의 상속,
 * JS에서 프로토타입의 개념과 유사함.
 *
 * 인터페이스를 상속받아서
 * 기존에 있던 것보다 확장해서
 * 사용할 수 있는 것들을 '확장' 이라고 보면 됨.
 */
interface Person {
  name: string;
  age: number;
}

// Developer 인터페이스는 Person 에 정의된 인터페이스를 확장받기 때문에
// Developer 인터페이스를 사용하는 변수는 language 뿐만 아니라,
// name, age 까지 다 써줘야 에러가 안 뜸.
interface Developer extends Person {
  language: string;
}

const captain: Developer = {
  language: "ts",
  age: 100,
  name: "캡틴",
};
