let dragged;
//드래그가 발생하며 클래스가 전환되면 style.css에서 스타일 변경
/* 드래그 가능한 대상에서 발생하는 이벤트 */
document.addEventListener("drag", (event) => {
  console.log("dragging");
});

document.addEventListener("dragstart", (event) => {
  // 드래그한 요소에 대한 참조 저장
  dragged = event.target;
  // 반투명하게 만들기
  event.target.classList.add("dragging");
});

document.addEventListener("dragend", (event) => {
  // 투명도 초기화
  event.target.classList.remove("dragging");
});

/* 드롭 대상에서 발생하는 이벤트 */
//드래그 한 파일이 브라우저가 보여줄 수 있는 형식이라면 파일을 열어버린다.
document.addEventListener(
  "dragover",
  (event) => {
    // 드롭을 허용하기 위해 브라우저의 기본 동작 취소
    event.preventDefault();//이 함수를 호출해야 드롭 가능한 영역이 됨
  },
  false,
);

document.addEventListener("dragenter", (event) => {
  // 드래그 가능한 요소가 대상 위로 오면 강조 표시
  if (event.target.classList.contains("dropzone")) {
    event.target.classList.add("dragover");
  }
});

document.addEventListener("dragleave", (event) => {
  // 드래그 가능한 요소가 대상 밖으로 나가면 강조 제거
  if (event.target.classList.contains("dropzone")) {
    event.target.classList.remove("dragover");
  }
});

document.addEventListener("drop", (event) => {
  // 일부 요소의 링크 열기와 같은 기본 동작 취소
  event.preventDefault();
  // 드래그한 요소를 선택한 드롭 대상으로 이동
  if (event.target.classList.contains("dropzone")) {
    event.target.classList.remove("dragover");
    dragged.parentNode.removeChild(dragged);
    event.target.appendChild(dragged);
  }
});
