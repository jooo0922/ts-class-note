class Person2 {
  // 타입스크립트에서는 클래스에서 사용할 속성(필드, 멤버변수)의 타입을 클래스 최상단에 지정해줘야 에러가 안남!
  // 또한, 멤버변수의 유효범위를 설정할 수 있는데,
  // 이 클래스 안에서만 사용할 속성(멤버변수) 앞에는 private,
  // 그렇지 않으면 public 이라는 키워드를 붙여서 사용할 수 있음.
  private name: string;
  public age: number;
  readonly log: string; // 또한, 멤버변수 앞에 'readonly' 를 붙이면, 접근만 할 수 있고, 값은 변경할 수 없는 속성으로 지정하는 것임.

  // constructor 에 들어오는 파라미터들의 타입도 따로 지정해줘야 함.
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

// 리액트 예전 문법 - 클래스 기반 코드
// class App extends React.Component {}

// 리액트 최신 문법 - 훅 기반의 함수형 코드
// function App() {
//  return (
//    <div>
//      Hello World
//    <div>
//  );
// }

/**
 * 위와 같이 리액트 최신 문법도
 * 함수형 컴포넌트 기반으로 변경되었기 때문에,
 * 클래스를 사용할 일이 많지는 않을 것임.
 *
 * 대신, 두 번째 프로젝트에서
 * 어떤 식으로 타입스크립트 클래스가 사용되는 것인지
 * 연습해볼 것임.
 */
