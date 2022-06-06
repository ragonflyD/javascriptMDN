// createParagraph 새로운 문단을 만들어 DOM에 추가한다
function createParagraph() {
  const para = document.createElement("p"); // p 태그 생성
  para.textContent = "정예진은 꼬미를 사랑해";
  document.body.appendChild(para); // body 태그에 p 태그 추가
}

// button 태그들 모두를 buttons 배열에 담는다
const buttons = document.querySelectorAll("button");

// for ~ of 반복문으로 buttons 배열에서 button이 null이 나올때까지 반복
for (const button of buttons) {
  button.addEventListener("click", createParagraph);
}
