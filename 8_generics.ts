// function logText(text) {
//   console.log(text);
//   return text;
// }
// logText(10); // 숫자 10 리턴
// logText("하이"); // 문자열 하이 리턴
// logText(true); // 진위값 true 리턴

function logText<T>(text: T): T {
  console.log(text);
  return text;
}
// 제네릭은 이런 식으로 '함수를 호출하면서 파라미터를 넘겨주는 순간'에
// 해당 파라미터의 타입을 동시에 넘겨주는 방식이라고 보면 됨!
// 즉, 미리 함수에 지정해놓은 타입이 아닌, 함수를 호출할 때 동적으로 넘겨줄 수 있는 타입이라는 뜻!
logText<string>("하이");
