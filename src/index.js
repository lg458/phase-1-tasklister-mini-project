document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => { 
    e.preventDefault(); 
    buildTodo(e.target["new-task-description"].value);
  }) 
});

function buildTodo(todo) {  
const x = document.getElementById("priority").value;
const chk = document.createElement("input"); 
const p = document.createElement("p"); 
const btn = document.createElement("button");  
chk.type = "checkbox"; 
btn.textContent = "delete";
p.textContent = `${todo}    `;
btn.addEventListener('click', handleDelete);
p.appendChild(chk); 
p.appendChild(btn); 
handleSelection(x, p);

}
function handleDelete(e) { 
  e.target.parentNode.remove();
} 

function handleSelection(priority, p) { 
  if (priority === "high") { 
    document.querySelector("#high_tasks").appendChild(p);
  }
  if (priority === "medium") { 
    document.querySelector("#medium_tasks").appendChild(p);
  } 
  if (priority === "low") { 
    document.querySelector("#low_tasks").appendChild(p);
  }
}