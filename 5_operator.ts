/**
 * 연산자를 이용하지 않는 타입 정의
 *
 * 만약 어떤 파라미터에 string, number 를
 * 모두 허용하고 싶다면?
 *
 * 여태까지 배운 바에 의하면
 * 그냥 파라미터 타입을 any 로 지정하면 되겠지.
 *
 * 근데 이렇게 하면
 * 타입스크립트를 사용하는 의미가 없음!
 */
// function logMessage(value: any) {
//   console.log(value);
// }
// logMessage("hello");
// logMessage(100);

// 연산자를 이용한 타입 정의

/**
 * 유니온 타입(Union Type)
 *
 * 유니온 타입은 | (or) 연산자를 이용해서
 * 하나 이상의 타입을 동시에 허용하는 타입!
 */
let sehoo: string | number | boolean; // 타입을 연산자로 연결한 만큼 지정할 수 있음.
function logMessage(value: string | number) {
  if (typeof value === "number") {
    // 이런식으로 타입을 분기했을 때 유니온 타입의 장점이 드러남.
    // 이렇게 해주면 if 문 안에서 value는 무조건 number 로 추론되기 때문에
    // number 타입에 대한 API 나 속성들을 바로 사용할 수 있음.
    // 반면, 맨 위에 코드처럼 타입을 any 로 지정해버리면,
    // 해당 함수 안에서는 value의 타입이 무조건 any 로 추론되기 때문에,
    // 타입을 분기해도 그 타입에 해당하는 API 에 접근할 수 없음!
    value.toLocaleString();
  }
  if (typeof value === "string") {
    value.toString();
  } // 이런 식으로, 특정 타입으로 타입의 범위를 좁혀나가는(필터링하는) 과정을 '타입 가드' 라고 함!

  // 이런 식으로 지정되지 않는 타입이 들어왔을 때 타입 에러를 내는 것도 가능함.
  throw new TypeError("value must be string or number");
}
logMessage("hello");
logMessage(100);

interface Developer {
  name: string;
  skill: string;
}

interface Person2 {
  name: string;
  age: number;
}

function askSomeone(someone: Developer | Person2) {
  /**
   * 여기서 헷갈리기 쉬운 유니온 타입의 특성
   *
   * 왜 인터페이스 타입 Developer 나 Person2 둘 중 하나로
   * 들어오는거면, 합집합이니까 인터페이스 안에 있는
   * 속성들도 전부 다 접근할 수 있어야 하는 거 아닐까?
   *
   * 왜 someone.skill 이나 someone.age 는 에러가 나고,
   * 두 인터페이스의 공통 속성인
   * someone.name 만 접근할 수 있는걸까?
   *
   *
   * 헷갈릴 수 있지만, 생각해보면 당연함.
   *
   * Developer 또는 Person2 둘 중에 하나가 들어오는 거라면,
   * Developer 가 들어올 지, Person2 가 들어올 지 모르는 거잖아?
   *
   * 그런데 name 속성은 최소한 두 인터페이스에 모두 존재하니까
   * 어떤 게 들어오던 name 속성에는 항상 접근할 수 있는거임.
   *
   * 반면 skill 같은 속성은 Person2 로 들어왔다면 접근을 못하니까
   * 에러가 날 수밖에 없겠지?
   *
   * 따라서, 인터페이스 같은 구조체 형태의 타입 여러개를
   * 유니온 타입으로 지정하는 경우,
   *
   * 각 인터페이스들의 공통된 속성,
   * 즉 보장된 속성에 대해서만 접근할 수 있도록 한 것임!
   */
  someone.name;
  // 만약 someone.age, .skill 에도 접근하고 싶다면,
  // 위에서 분기를 사용해서 타입 가드를 적용한 것처럼
  // 특정 인터페이스로 타입의 범위를 좁혀놓은 뒤 접근할 수 있음!
}
