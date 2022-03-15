const classNames = {
  TODO_ITEM: "todo-container",
  TODO_CHECKBOX: "todo-checkbox",
  TODO_TEXT: "todo-text",
  TODO_DELETE: "todo-delete",
};

const list = document.getElementById("todo-list");
const itemCountSpan = document.getElementById("item-count");
const uncheckedCountSpan = document.getElementById("unchecked-count");
let inputValue=document.getElementById("input-item");
var count=0;
var check=0;

function newTodo() {
  /*Add Logic for creating a new Todo Item. */
  
  /*Below lines can be used to updated the data on frontend */
  if (inputValue.value==''){
  
    alert("Add items");
    }
  else{
    var li=document.createElement('li');


      var inp=document.createElement('input');
      inp.type='checkbox';
      inp.name='name';
      inp.value='item_name';
      inp.id='checkboxes';
      inp.addEventListener('click',function(e){
        // alert(e.target.checked);
        if(e.target.checked){
          check++;
          uncheckedCountSpan.innerHTML =check;
        }
        else{
        check--;
          uncheckedCountSpan.innerHTML =check;
        }
      });
      
      
      var labl=document.createElement('label');
      labl.innerText=inputValue.value;
      
      var btn=document.createElement('button');
      btn.innerText='delete';
      // btn.onclick=singleRemove; 
      btn.addEventListener('click',function(e){
        // const res=e.target.parentNode;
        // todos.removeChild(res);
        // // alert(e.target.parentNode.);
        // // e.target.parentNode.removeChild(e.target.parentNode.childNodes[0]);
        // // e.target.parentNode.removeChild(e.target.parentNode.childNodes[1]);
        // e.parentNode.parentNode.removeChild(e.parentNode);
        // e.target.parentNode.childNodes[2].innerHTML=''  ;
        // alert(a);
        // this.removeChild(ab);
        var text="";
        // text = this.parentNode.childNodes[1].innerHTML
        // this.parentNode.childNodes[1].innerHTML = ""
        // var del = document.createElement("del")
        // del.innerHTML = text
        // this.parentNode.childNodes[1].appendChild(del)
        // uncheckedCountSpan.innerHTML = uncheckedCountSpan.innerHTML * 1 - 1;
        text = this.parentNode.childNodes[1].childNodes[0].innerHTML
    this.parentNode.childNodes[1].childNodes[0].style.display = "none"
    this.parentNode.childNodes[1].innerHTML = text
    uncheckedCountSpan.innerHTML = uncheckedCountSpan.innerHTML * 1 + 1;
      })

      li.appendChild(inp);
      li.appendChild(labl);
      li.appendChild(btn);
      list.appendChild(li);
      // console.log(li);

      // list.innerHTML +=`<li><input type="checkbox" name="name" value="item_name" id="checkBoxes" onClick="uncheckedCount(this)"><label> ${inputValue.value} </label>
      // <button id="delete" onClick="removeTodo()">Delete</button></li>`;
      count++;

      itemCountSpan.innerHTML=count;
  inputValue.value='';
  } 
}

function uncheckedCount(){

}





function removeTodo() {
  /*Add Logic for removing an existing TODO Item */
  /*Below lines can be used to updated the data on frontend */
  list.innerHTML = " ";
  itemCountSpan.innerHTML = "";
  uncheckedCountSpan.innerHTML = "";

  // this.parentNode.style.display = "none"
  // count--;
  // // alert(this.parentNode);
  // itemCountSpan.innerHTML = itemCountSpan.innerHTML =count;
  //   uncheckedCountSpan.innerHTML = uncheckedCountSpan.innerHTML =count;
    
  //   this.document.querySelector('li').remove();
  
}
function singleRemove(e) {
  if (count <=0){
    count=0;
  }
  else{

    itemCountSpan.innerHTML = itemCountSpan.innerHTML =count;
    uncheckedCountSpan.innerHTML = uncheckedCountSpan.innerHTML =count;
    
    e.document.querySelector('li').remove();
  }
}
