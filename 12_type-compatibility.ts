// 인터페이스
interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
}

let developer: Developer;
let person: Person;

/**
 * 타입 호환
 *
 * 타입 호환의 원리 상 아래 첫째 줄 할당은 성립이 안됨.
 *
 * Developer 인터페이스가 Person 인터페이스보다
 * skill 이라는 속성값을 하나 더 갖고있기 때문에,
 * 속성값이 더 많은 타입에 속성값이 더 적은 타입을 할당하면
 * 타입호환이 안됨.
 *
 * 즉, 할당식에서 왼쪽의 타입보다 오른쪽의 타입이
 * 속성값이 더 많아야 타입호환이 성립됨.
 */
// developer = person;
person = developer; // 얘는 타입호환이 성립됨.

class Person {
  name: string;
}
// 얘도 마찬가지로 class 라는 다른 구조체가 생성되었긴 했지만,
// 그것보다는 속성값이 Developer 타입보다 적기 때문에 타입호환이 안되고 있음.
developer = new Person();

/**
 * 위에서 봐도 알 수 있듯,
 * 타입호환을 확인할 때에는 class, interface, 타입별칭 등
 * 앞에 붙은 구조체를 확인하는 것이 아니라,
 *
 * 내부적으로 존재하는 속성과 타입에 대한 정의들을
 * 비교해야 함!
 */
