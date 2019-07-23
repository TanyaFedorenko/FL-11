let rootNode = document.getElementById('root');
let num_10=10;
let text_add;
let i = 0;
let btnDelete = document.createElement('button');
let allBtn;
let allDiv;

function test() {

    text_add = document.getElementById('add').value
    let div = document.createElement('div');
    let input = document.createElement('input');
    let p = document.createElement('p');
       let btn = document.createElement('button');
    let btnDelete = document.createElement('button');
    div.style.display = 'flex';
    p.innerHTML = text_add;
    p.style.margin = '0 10px';
    btnDelete.innerHTML = '<i class="material-icons" id="i_todo" >delete</i>';
    btn.innerHTML = '<i class="material-icons" id="i_todo" >create</i>'
    input.setAttribute('type', 'checkbox');
    input.style.display = 'inline-block';
    input.style.transform = 'scale(2)';
    btnDelete.style.margin = '0px 0px 0px auto';
    btnDelete.setAttribute('onclick', 'del(this)');
     btn.setAttribute('onclick', 'change(this)');
    div.setAttribute('class', 'block');
    div.style.margin = '20px 0px 10px';
    rootNode.appendChild(div);
    div.appendChild(input);
    div.appendChild(p);
    div.appendChild(btn);
    div.appendChild(btnDelete);
    allBtn = document.getElementsByTagName('button')
    allDiv = document.getElementsByClassName('block')
    a();

}

function a() {

    i++;
    if (i === num_10) {
        let add_btn = document.getElementById('add_btn');
        add_btn.setAttribute('disabled', 'disabled')
    }

}

function del() {
    for (let i = 0; i < allDiv.length; i++) {
        allDiv[i].onclick = delAll;
    }

    function delAll() {
        this.remove();
        i--;
    }
}

function change() {
   
    let divChange =document.createElement('div');
    let inputChange = document.createElement('input');
    divChange.appendChild(inputChange);
    for (let i = 0; i < allDiv.length; i++) {
        allDiv[i].onclick = changeAll;
    }

    function changeAll() {
        console.log(allDiv[i]);

    }

}
