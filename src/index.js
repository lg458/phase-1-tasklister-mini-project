document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => { 
    e.preventDefault(); 
    const x = document.getElementById("priority").value;
    const todo = e.target.new_task_description.value;
    const chk = document.createElement("input"); 
    const p = document.createElement("p"); 
    const btn = document.createElement("button");  
    chk.type = "checkbox"; 
    btn.textContent = "delete";
    p.textContent = `${todo}    `;
    btn.addEventListener('click', handleDelete);
    p.appendChild(chk); 
    p.appendChild(btn); 
    
    if (x === "high") { 
      document.querySelector("#high_tasks").appendChild(p);
    }
    if (x === "medium") { 
      document.querySelector("#medium_tasks").appendChild(p);
    } 
    if (x === "low") { 
      document.querySelector("#low_tasks").appendChild(p);
    }
  }) 
});

function handleDelete(e) { 
  e.target.parentNode.remove();
} 

