# 개요

한번 각잡고 만들어 보는 개인프로젝트<br>
무려 직접 로그인하여 글을 쓰고 지우고 검색하고 글을 나눠서 볼 수 있게 만들고 있어요!<br>
클라이언트 화면 :
![클라이언트](./imgs/img1.png)
로그인 화면 :
![로그인 화면](./imgs/img2.png)

[개발중인 화면입니다].

# to-dos

✔사이드를 다른 곳에서도 사용가능하도록 분리하여 다시 병합하기(~~iframe 활용해보기~~, 자바스크립트로 새로 생성하기)<br>
✔로그인 창 만들기<br>
로그인 창에서 원할 때 쓰고있던 비밀번호를 보이게 하기<br>
회원가입 창 만들기<br>
✔검색창과 일시적으로 구글 검색창과 연결하여 작동이 되게 하기(변동가능)<br>
✔로컬스토리지와 연동하여 글을 쓸 수있는 기능을 제작하기<br>
✔검색창 클릭시 너비가 넓어지는 애니메이션 구현하기<br>
✔검색창으로 로컬스토리지에 작성된 글을 찾을 수 있도록 만들기(현재는 li중 띄우는 거임)<br>
✔글을 공지 제외 15개 단위로 쪼개어 한 화면에 나오도록 만들기<br>
🔨글 등록 생성을 hidden 요소로 가렸다 나타나게 하기<br>
✔글 페이지를 넘길 수 있는 기능을 구현하기<br>
🔨로그인 기능을 구현하여 자신이 쓴 글을 알아보고, 지울 수 있도록 하기<br>
✔글삭제할 수 있는 기능 구현하기<br>
✔가장 최근 작성된 글을 최상단에 띄우기<br>

# Feedbacks

아는 형님 3:

1. 글을 삭제하고 다른 글을 올리면 전에 삭제한 글이 같이 표시되는데 새로고침하면 없어지긴하지만 애초에 로직상 표시되면 안 되는거라 이 부분 수정하고<br>
2. 글쓰기 눌렀을때 form태그 자체가 만들어지는 것보다는 Input에 hidden 을 줬다뺐다하는게 나아 <br>
   그리고 그것보다 보안측면에서 봤을때는 그냥 폼태그 자체를 없애고 a태그 onclick 속성줘서 js 코드 실행시키는게 좋고
