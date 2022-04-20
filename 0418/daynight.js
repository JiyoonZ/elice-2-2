function night() {
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('body').style.color = 'white';
  let as = document.querySelectorAll('a');
  for(let i=0; i<as.length; i++) {
      as[i].style.color='white';
  }
  //여기에 this 있으면 안된다. 
};

function day() {
  // 아니라면 아래 코드가 실행된다. 
  document.querySelector('body').style.backgroundColor = 'white';
  document.querySelector('body').style.color = 'black';
  let as = document.querySelectorAll('a');
  for(let i=0; i<as.length; i++) {
      as[i].style.color='black';
  }
};

export function dayNight (mode) {
  if (mode === 'night') {
      night();
  } else {
      day();
  }
}