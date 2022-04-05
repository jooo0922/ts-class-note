// 타입 추론 기본 1

// 변수 선언을 하면 TS 랭귀지 서버가 VSCode 에서 돌아가고 있기 때문에
// 타입을 추론하기 시작함.
let a = "abc";

// 인자 b 를 받은 뒤 바로 리턴해버리면, 리턴값은 인자값과 타입이 동일하다고 추론을 할 것임.
function getB(b = 10) {
  const c = "hi"; // 내부에서 변수를 선언 및 할당할 시, TS 랭귀지 서버가 해당 변수의 타입을 추론함.
  return b + c; // 이렇게 숫자 + 문자열 하면 문자열로 나오기 때문에, (ex> 10 + '10' = '1010' 이렇게 뜸.) 리턴값 타입이 string 으로 추론됨.
}

// 타입 추론 기본 2
// interface Dropdown<T> {
//   value: T;
//   title: string;
// }
// generic 으로 전달한 타입을 통해 value 속성값의 타입까지 추론하는 것도 TS 랭귀지 서버의 타입 추론으로 보면 됨.
// const shoppingItem: Dropdown<string> = {
//   value: "abc",
//   title: "hello",
// };

// 타입 추론 기본 3
interface Dropdown<T> {
  value: T;
  title: string;
}
// 원래 제네릭 타입 작성 시 관행적으로 <T> 라고 쓰지만, 여기서는 구분을 해주기 위해 <K> 로 씀.
/**
 * 여기서 K 에 제네릭을 넘겨주면,
 * K는 일단 DetailedDropdown 인터페이스의 tag 속성값의 타입을 K로 지정할 것이고,
 * DetailedDropdown 이 상속받는 Dropdown 인터페이스 또한 K 타입을 제네릭으로 받아서
 * Dropdown 의 value 속성값 타입도 K로 지정됨. -> 이런 식으로 2개 이상의 제네릭을 사용하여 복잡한 타입 추론 과정을 거칠 수 있음.
 *
 * 또한, 인터페이스를 상속받기 때문에 DetailedDropdown 타입이 지정된
 * 변수에는 value, title 값도 포함되어 있어야겠지.
 */
interface DetailedDropdown<K> extends Dropdown<K> {
  descriptiom: string;
  tag: K;
  // value,
  // title,
}

let detailedItem: DetailedDropdown<string> = {
  title: "abc",
  descriptiom: "ab",
  value: "a",
  tag: "a",
};
