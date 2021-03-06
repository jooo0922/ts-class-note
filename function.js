function sum(a, b) {
  return a + b;
}

/**
 * js의 유연함
 *
 * 파라미터를 2개만 정의해놓은 함수에
 * 5개의 파라미터를 전달하더라도,
 *
 * js는 앞의 2개의 인자만 가져오고,
 * 나머지 뒤에 3개 인자들은 그냥 무시해버림.
 *
 * 이런 것들이 자바스크립트가 주는 유연함이라고 할 수 있음.
 */
sum(10, 20, 30, 40, 50);
