let i = 0;

function timedCount() {
  i ++;
  postMessage(i); //화면을 만드는 메인에 i를 보낸다.
  setTimeout("timedCount()",500); //0.5초마다 계속해서 작업함
}
//postMessage() : HTML 페이지에 메시지를 다시 게시하는 데 사용되는 메서드
timedCount();