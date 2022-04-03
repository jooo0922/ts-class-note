// function logText(text) {
//   console.log(text);
//   return text;
// }
// logText(10); // 숫자 10 리턴
// logText("하이"); // 문자열 하이 리턴
// logText(true); // 진위값 true 리턴

// function logText<T>(text: T): T {
//   console.log(text);
//   return text;
// }
// 제네릭은 이런 식으로 '함수를 호출하면서 파라미터를 넘겨주는 순간'에
// 해당 파라미터의 타입을 동시에 넘겨주는 방식이라고 보면 됨!
// 즉, 미리 함수에 지정해놓은 타입이 아닌, 함수를 호출할 때 동적으로 넘겨줄 수 있는 타입이라는 뜻!
// logText<string>("하이");

// 제네릭을 왜 쓰는가?
// 제네릭을 씀으로써 기존 타입 정의 방식에 비해 이점이 뭔가?
// function logText(text: string) {
//   console.log(text);
//   // text.split("").reverse().join("");
//   return text;
// }

// function logNumber(num: number) {
//   console.log(num);
//   return num;
// }

/**
 * 예를 들어, logText() 라는 함수에
 * 문자열, 숫자, boolean 다 넣게 하고 싶은데
 *
 * 파라미터의 타입을 위에 처럼 string 으로 못박아 버리니까,
 * 숫자, boolean 을 넣으면 에러가 뜸.
 *
 * 이거를 해결하는 첫 번째 방법은 동일한 로직의 함수를
 * 파라미터 타입만 바꿔서 만드는 방법이 있음.
 * -> 즉, 위에서 처럼 logNumber() 와 같은 함수를 따로 만드는 것임.
 *
 * 그러나, 이는 유지보수 관점에서 좋은 코드가 아님.
 * 왜냐하면, 동일한 로직의 코드를 타입만 바꾼 뒤,
 * 중복해서 작성해줘야 하기 때문!
 */
// logText("a");
// logText(10);
// const num = logNumber(10);
// logText(true);

// 위에 코드 중복의 문제점을 해소하기 위해 앞서 배웠던 유니온 타입을 사용할 수도 있음.
// function logText(text: string | number) {
//   이렇게 하면 하나의 동일한 함수에서 여러 타입을 인자로 받을 수 있게 됨.
//   console.log(text);
//
//   /**
//    * 그러나, 유니온 타입을 사용하면
//    * 아래와 같은 문제점이 발생함.
//    *
//    * 즉, 함수 내에서 타입 가드 기법을 활용해서
//    * 파라미터 타입에 대한 분기처리를 해주지 않으면
//    *
//    * split() 이런 것처럼 string 에서만 사용할 수 있는
//    * api를 호출할 때 에러를 띄움.
//    *
//    * 왜냐? text 는 string일 수도 있지만,
//    * number 일 수도 있잖아?
//    *
//    * 그럴 경우에는 split() 을 사용할 수 없기 때문에
//    * 에러를 띄우게 되는 것임.
//    */
//   text.split("");
//   return text;
// }

// const a = logText("a");
// a.split(""); // 얘도 마찬가지로, a 가 string일 지 number일 지 정확히 알 수 없기 때문에, split('') 같은 문자열 api를 사용하려고 하면 에러를 띄움.
// logText(10);

// 제네릭으로 위의 문제들을 해결하는 방법!
// '<T>' 아래와 같이 꺽쇠표시를 통해 "이 함수를 호출할 때 어떤 타입을 받을거야, 제네릭을 쓸 거야" 라고 선언하는 것.
// 그 다음에 ': T' 이렇게 해준 것들은 꺽쇠에 표시된 전달받을 타입을 파라미터에도 쓰고, 리턴값에도 쓰겠다는 뜻.
function logText<T>(text: T): T {
  console.log(text);
  return text;
}

// 이런 식으로 함수를 '호출'할 때 타입을 지정해서 전달하는 게 제네릭!
const str = logText<string>("abc"); // str 값을 보면 string 으로 타입이 지정되어 있는 것을 볼 수 있음.
str.split(""); // 문자열 api 인 split() 을 사용해도 에러가 나지 않음!
const login = logText<boolean>(true); // 이렇게 동일한 함수인데 타입만 바꿔서 지정하여 호출할 수 있는 것이 제네릭의 장점!

// logText("a");
// logText(10);

// 인터페이스에 제네릭을 선언하는 방법
// 제네릭을 사용하지 않은 인터페이스
interface Dropdown {
  value: string;
  selected: boolean;
}
const obj: Dropdown = { value: 10, selected: false }; // 제네릭을 사용하지 않은 인터페이스는 미리 정의된 타입이 아니라면 에러를 띄움.

// 제네릭을 사용한 인터페이스
interface Dropdown2<T> {
  value: T;
  selected: boolean;
}
const obj2: Dropdown2<string> = { value: "abc", selected: false }; // 제네릭을 사용한 인터페이스는 객체를 할당하는 시점에 원하는 타입을 바로 지정할 수 있음!

// 제네릭의 타입 제한
// 참고로 리턴값은 굳이 T 라고 명시 안해줘도 TS 랭귀지 서버가 알아서 타입추론을 해주지만,
// 명시를 해주는 게 가독성에도 좋고 제네릭의 문법을 잘 준수하는 방법이기 때문에 써놓는 게 좋음.
function logTextLength<T>(text: T[]): T[] {
  // T 에 어떤 타입이 들어올 지는 모르지만, .length, .forEach 등
  // 배열 api 를 사용하고 싶다면, T[] 이런 식으로, T 타입이 들어가는 배열들이다 라고
  // 힌트를 줌으로써, 내부적으로 배열 API를 사용해도 오류가 나지 않도록 할 수 있음. -> 이를 '제네릭 타입 제한' 이라고 함.
  console.log(text.length);
  text.forEach(function (text) {
    console.log(text);
  });
  return text;
}
logTextLength<string>(["hi", "abc"]);

// 제네릭 타입 제한 2 - 정의된 타입 이용하기 (extends(타입 상속) 사용)
interface LengthType {
  length: number;
}

// 인터페이스로 미리 정의해놓은 타입을 상속받으면,
// 함수 내부에서 상속받은 타입 안에 존재하는 속성(length) 에 접근할 수 있음!
function logTextLength2<T extends LengthType>(text: T): T {
  text.length;
  return text;
}
logTextLength2(10);
logTextLength2({ leng: 10 });
logTextLength2({ length: 10 }); // 위에처럼 쓰면 에러를 띄우고, 상속받은 타입을 포함하는 상태로 인자를 전달해야 에러를 띄우지 않음.
// 이런 식으로 미리 정의된 인터페이스 타입을 이용해서도 제네릭 타입 제한을 해줄 수 있음.

// 제네릭 타입 제한 3 - keyof
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}

// 위에 정의해놓은 인터페이스 타입 안에 있는 name, price, stock 중 하나만 받겠다고 타입을 제한할 수 있음!
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  // <T extends keyof ShoppingItem> 이런 식으로 제네릭을 정의하면
  // '상속받은 ShoppingItem 인터페이스의 속성들(key값만! key에 할당된 타입 value가 아님!) 중 하나만 제네릭 타입으로 들어올 수 있다' 라고 타입을 제한하는 것임!
  return itemOption;
}
getShoppingItemOption(10);
getShoppingItemOption<string>("a"); // 이 두 줄은 호출할 때 넣어준 인자값이 ShoppingItem 의 속성들 중 하나가 아니므로, 제네릭 타입으로 넣어줄 수 없어서 에러를 띄움.
getShoppingItemOption("name"); // 'key값만' 제네릭 타입 인자로 넣어줄 수 있음! {name: 'capt'} 이런 거 넣어줘도 에러가 남!
// 즉, keyof 로 제네릭 타입을 제한하게 되면, ShoppingItem 같은 인터페이스의 key값들, 즉 'name', 'price', 'stock' 만 타입으로 넣어줄 수 있는 것임!
