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

// 함수 타입호환
let add = function (a: number) {
  // ...
};
let sum = function (a: number, b: number) {
  // ...
};
/**
 * 함수의 타입호환은 클래스, interface 와 반대임.
 *
 * 오른쪽의 함수가 왼쪽의 함수보다
 * 전달해야하는 인자가 더 많으면 호환이 안되고,
 *
 * 반대로 왼쪽의 함수가 오른쪽의 함수보다
 * 전달해야하는 인자가 더 많으면 호환이 됨!
 */
add = sum; // 얘는 호환 안됨.
sum = add; // 얘는 왼쪽의 sum 이 전달해야하는 인자가 더 많아서 호환이 됨.

// 제네릭 타입호환
interface Empty<T> {
  // ..
}
/**
 * Empty 인터페이스는
 * 서로 다른 제네릭을 전달받더라도, 그걸로 내부에
 * 어떤 속성값들의 타입을 지정하지는 않기 때문에
 * 사실상 empty1 이나 empty2 는 내부적으로 아무것도 없는
 * 동일한 구조체라고 볼 수 있음.
 *
 * 그래서 둘 사이에서 할당을 해도
 * 에러가 발생하지 않고, 타입호환이 성립함.
 */
let empty1: Empty<string>;
let empty2: Empty<number>;
empty1 = empty2;
empty2 = empty1; // 타입호환 성립 o

/**
 * 반면, NotEmpty 인터페이스는
 * 서로 다른 제네릭을 전달받으면,
 * 내부에 data 라는 속성값의 타입으로
 * 지정되기 때문에,
 *
 * string 타입을 제네릭으로 전달받은 notEmpty1과
 * number 타입을 제네릭으로 전달받은 notEmpty2는
 * 서로 다른 구조체라고 볼 수 있음.
 *
 * 그래서 둘 사이에서 할당을 하면
 * 당연히 타입호환이 성립하지 않음.
 */
interface NotEmpty<T> {
  data: T;
}
let notEmpty1: NotEmpty<string>;
let notEmpty2: NotEmpty<number>;
notEmpty1 = notEmpty2;
notEmpty2 = notEmpty1; // 타입호환 성립 x
