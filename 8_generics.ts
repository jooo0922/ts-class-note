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
