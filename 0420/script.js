const topics = [
  {id: 1, title:'html', body:'html is ...'},
  {id: 2, title:'css', body:'css is ...'},
  {id: 3, title:'js', body:'js is ...'},
];
//추가되는 원자에 Id 값을 위해
let nextId = 4;
let selectedId = null;

function navHandler(e) {
  // 1. 링크작동 안하도록
  e.preventDefault();
  // 2. 아이디 값을 알아내기 
  selectedId = Number(e.target.id);
  read();

};
// 목록 출력하기
function nav() {
  //topics라는 데이터에 요소하나씩 접근해서 태그로 만들어주기
  const tag = topics.map(x => `<li><a href='/read/${x.id}' id="${x.id}" onclick="navHandler(event)">${x.title}</a></li>`).join('');
  //만들어준 태그를 원하는 위치안에 넣기
  document.querySelector('nav>ol').innerHTML = tag;

};



function welcome() {
  document.querySelector('article').innerHTML = `<h2>Welcome</h2>Hello, WEB`;
  selectedId = null;
}

// SelectedId 는 전역 변수이기때문에 매개변수로 안넘겨도 된다! 
function read() {
  // 3. 아이디와 일치하는 topics의 원소를 찾는다.
  const topic = topics.filter(e =>  e.id === selectedId)[0];
  // 4. 본문을 만든다.
  const content = `<h2>${topic.title}</h2>${topic.body}`;
  // 5. 본문을 출력한다. 
  document.querySelector('article').innerHTML = content;
  // 해당 topic에 맞는 control 버튼 출력
  control();
}

function createHandler(e) {
    //create 버튼을 눌러도 본문과 제목은 사라지지 않는다! 
    e.preventDefault();
    const t = e.target.title.value;
    const b = e.target.body.value;
    
    const newTopic = {id:nextId, title:t, body:b};
    topics.push(newTopic);
    nav();
    selectedId = nextId;
    nextId++;
    read();
}
function create() {
  const content =  `
      <form onsubmit="createHandler(event);">
        <p><input type="text" name="title" placeholder="제목"></p>
        <p><textarea name="body" name="body" placeholder="본문"></textarea></p>
        <p><input type="submit" value="create" ></p>
      </form>
  `;
  document.querySelector('article').innerHTML=content;
}
function update() {}
function del() {}

// id가 control 인 ol 태그 아래에 넣는 용도
function control() {
  let contextUI = '';
  if(selectedId !== null) {
    contextUI = `
      <li><a href="/update">Update</a></li>
      <li><a href="/delete">Delete</a></li>
     `;            
  } 
  document.querySelector('#control').innerHTML = `
    <li><a href="/create" onclick="
      event.preventDefault();
      create();
     ">Create</a></li>${contextUI}
    `;

}

// 처음 로드되자마자
nav();
welcome();
control();