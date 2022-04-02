// class 는 ES2015 (ES6) 에 도입되었음.

// js class 는 단순히 기존의 문법을 더욱 보기좋게 만든 Syntactic sugar 라고 보면 됨.
// 아래의 Person 함수는 Person 클래스와 정확히 동일함. 다만 문법적으로 보기 쉽게 표현한 것이 Person 클래스!
// 원래 JAVA 개발자들이 js 를 익숙하게 사용할 수 있도록 하기 위해 class 를 만든 것이지만,
// Babel 로 클래스 문법을 돌려보면 결국 생성자 함수로 컴파일되는 것을 알 수 있음.
// -> 따라서, 클래스로 문법이 바뀌었다고 해도 프로토타입 기반의 상속은 계속 유지가 되는 것이라고 보면 됨.
// 클래스를 쓰지 않더라도, 생성자 함수를 이용해서 동일한 기능을 구현할 수 있름!
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const capt = new Person("캡틴", 100);

class Person {
  // 클래스 로직
  constructor(name, age) {
    // 클래스의 가장 기본적인 초기화 메서드 -> contructor!
    console.log("생성 되었습니다");
    this.name = name;
    this.age = age;
  }
}

const seho = new Person("세호", 30); // Person 의 인스턴스가 생성되면서 constructor 내의 콘솔이 출력될거임.
console.log(seho);
