/**
 * 이 프로젝트에서 가장 큰 미션은
 * email과 numberOfProducts 의 요소들을
 * 모두 수용할 수 있는 타입을
 * createDropdownItem() 함수를 선언 및 호출할 때
 * 제네릭을 활용해서 정의해줘야 함!
 */

// 먼저 반복적으로 사용되는 타입들은 interface 로 정리해놓자
interface Email {
  value: string;
  selected: boolean;
}

const emails: Email[] = [
  { value: "naver.com", selected: true },
  { value: "gmail.com", selected: false },
  { value: "hanmail.net", selected: false },
];

interface ProductNumber {
  value: number;
  selected: boolean;
}

// 만약에 boolean 값을 받는 드롭다운 메뉴가 있다면 interface 를 또 추가해야 됨.
interface TrueFalse {
  value: boolean;
  selected: boolean;
}

/**
 * 이런 식으로 향후에 어떤 타입이 오든 간에
 * 매번 타입에 대한 타입 정의를 interface 로 일일이 해줄 게 아니라,
 * Generic 을 이용해서 타입이 뭐가 오든 그때그때 유연하게
 * 가져다 쓰도록 할 수 있음.
 */

const numberOfProducts: ProductNumber[] = [
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];

function createDropdownItem(item: Email | ProductNumber) {
  const option = document.createElement("option");
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}

// NOTE: 이메일 드롭 다운 아이템 추가
emails.forEach(function (email) {
  const item = createDropdownItem(email);
  const selectTag = document.querySelector("#email-dropdown");
  selectTag.appendChild(item);
});

numberOfProducts.forEach(function (product) {
  const item = createDropdownItem(product);
});
