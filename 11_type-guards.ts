interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function introduce(): Developer | Person {
  return { name: "Tony", age: 33, skill: "Iron Making" };
}
const tony = introduce();

// 분명 skill 속성값이 포함된 객체를 리턴받았는데 왜 .skill 을 접근하면 에러가 뜰까?
// union 연산자(|)를 이용해서 타입을 정의하면, 두 타입의 공통된 타입(교집합)만 접근할 수 있도록
// 타입이 리턴되기 때문에, 공통 속성인 .name 만 접근이 가능하도록 되어있음!
// console.log(tony.skill);
console.log(tony.name);

/**
 * 그런데 아이러니한 것이,
 * union 연산자 타입의 특성이기 때문에 그렇다고 치더라도,
 * 분명히 skill 값이 포함된 객체를 리턴하고 있음에도 불구하고,
 * .skill 을 접근하려고 하면 에러를 띄운다는 것...
 *
 * 만약 .skill 에 에러없이 접근하고 싶다면,
 * 저 skill 속성값이 들어있다는 것을 보장하는 '타입 단언' 을 사용하면 됨!
 *
 * 즉, tony가 Developer 인터페이스 타입을 갖고 있다는 것을
 * 단언해주기만 하면 됨!
 *
 * -> 타입의 범위를 줄여나가는, 구체화시켜 나가는
 * 타입 단언을 이용한 타입 정의 방식!
 */
if ((tony as Developer).skill) {
  const skill = (tony as Developer).skill;
  console.log(skill);
} else if ((tony as Person).age) {
  // 또 이러한 방식으로 Person 으로 타입단언하여 .age 를 찍어볼 수도 있음!
  const age = (tony as Person).age;
  console.log(age);
}
// 이런 타입 단언을 활용한 방식의 문제점은,
// 조건문 뿐만 아니라 내부에서도 계속 as 키워드로 타입 단언을 해나가야 하므로,
// 코드가 길어지고 가독성이 떨어지는 문제가 발생함.
