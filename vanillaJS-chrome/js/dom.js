//css는 JS가 아닌 css에서 정의한다.
//ex) h1.style.color = 'blue' -> BAD

const h1 = document.querySelector('div.hello:first-child h1');

//toggle은 classList.add와 classList.remove를 합친 것이다.
//className의 경우 class를 대체하나,
//classList는 배열로 클래스를 추가하거나 삭제한다.

function handleTitleClick() {
  h1.classList.toggle('clicked');
}

h1.addEventListener('click', handleTitleClick);
