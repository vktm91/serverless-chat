/**
 * 자바스크립트의 비동기 처리
 *
 * 1. 자바스크립트는 싱글 스레드 언어
 *    - 자바스크립트는 싱글 스레드(single-threaded) 언어이다. 한 번에 하나의 작업만 수행한다.
 *
 * 2. 자바스크립트의 이벤트 루프
 *    - 비동기 작업을 처리하기 위해 자바스크립트는 이벤트 루프를 사용한다.
 *    - 이벤트 루프는 자바스크립트가 하나의 스레드에서 여러 작업을 비동기적으로 처리할 수 있게 해주는 핵심 요소이다.
 *
 * 3. 콜백 큐(Callback Queue)
 *    - 비동기 작업은 콜백 큐에 들어가고, 이벤트 루프가 이를 하나씩 꺼내서 처리한다.
 *
 * 4. 자바스크립트의 동작 방식
 *    - 자바스크립트는 가능한 빨리 할 수 있는 작업부터 처리한다.
 *    - `setTimeout`과 같은 비동기 작업은 그 자체를 바로 처리하지 않고, 대신 나중에 처리할 수 있도록 태스크 큐(콜백 큐)에 넣어둔다.
 *    - 자바스크립트는 단일 스레드이기 때문에 동기 작업은 순차적으로 처리된다.
 *    - 동기 작업은 콜 스택에 직접 추가되어 즉시 실행된다.
 *    - 비동기 작업(예: `setTimeout`, AJAX 요청 등)은 브라우저의 Web API가 처리한다.
 *    - 비동기 작업이 완료되면(예: 타이머가 끝나거나, 네트워크 요청이 완료되었을 때), 그 작업의 콜백 함수가 태스크 큐(콜백 큐)에 추가된다.
 *    - 이벤트 루프는 콜 스택이 비었을 때 태스크 큐에서 대기 중인 콜백을 콜 스택으로 이동시켜 실행한다.
 */


function displayA() {
    console.log('A');
}

function displayB(callback) {
    setTimeout(() => {
        console.log('B');
        callback();
    }, 2000);
}

function displayC() {
    console.log('C');
}

// 함수 안에 매개변수로 들어가는 함수(displayC)를 콜백함수라고 부른다.
displayA();
displayB(displayC);