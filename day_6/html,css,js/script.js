let ldata = fetchdata();
if (!ldata) {
  ldata = [
    {
      id: "c0ac49c5-871e-4c72-a878-251de465e6b4",
      type: "input",
      label: "Sample Input",
      placeholder: "Sample placeholder",
    },
    {
      id: "146e69c2-1630-4a27-9d0b-f09e463a66e4",
      type: "select",
      label: "Sample Select",
      options: ["Sample Option", "Sample Option", "Sample Option"],
    },
    {
      id: "45002ecf-85cf-4852-bc46-529f94a758f5",
      type: "textarea",
      label: "Sample Textarea",
      placeholder: "Sample Placeholder",
    },
    {
      id: "680cff8d-c7f9-40be-8767-e3d6ba420952",
      type: "checkbox",
      label: "Sample Checkbox",
    },
  ];
  savedata();
}

function savedata() {
  localStorage.setItem("tags", JSON.stringify(ldata));
}

function fetchdata() {
  const storeddata = localStorage.getItem("tags");
  if (storeddata) {
    return JSON.parse(storeddata);
  } else {
    return false;
  }
}

let container = document.getElementById("root");
let input = document.getElementById("button-input");
let select = document.getElementById("button-select");
let textarea = document.getElementById("button-textarea");
let checkbox = document.getElementById("button-checkbox");

function renderdata() {
  savedata();
  container.innerHTML = "";
  ldata.forEach((ele, index) => {
    let div = document.createElement("div");
    div.id = ele.id;
    div.classList.add("draggable-item");
    div.draggable = true;
    div.setAttribute("data-index", index);

    div.innerHTML = `
        <div id="dust-div">
            <label>${ele.type}</label>
            <button onClick="handledelete('${ele.id}')">🗑️</button>
        </div>
    `;

    if (ele.type == "input") {
      div.innerHTML += `<input type="text" placeholder="${ele.type}" value="${ele.label}"/>`;
    } else if (ele.type == "select") {
      div.innerHTML += `
        <select>
            <option>select 1</option>
            <option>select 2</option>
        </select>
      `;
    } else if (ele.type == "textarea") {
      div.innerHTML += `<textarea>${ele.label}</textarea>`;
    } else if (ele.type == "checkbox") {
      div.innerHTML += `<input type="checkbox"/>`;
    }

    div.addEventListener("dragstart", dragStart);
    div.addEventListener("dragover", dragOver);
    div.addEventListener("drop", drop);

    container.append(div);
  });
}

renderdata();

input.addEventListener("click", function handleinput() {
  let obj = {
    id: Math.random() * 100 + 10,
    type: "input",
    label: "Sample Input",
    placeholder: "Sample placeholder",
  };
  ldata.push(obj);
  renderdata();
});

select.addEventListener("click", function handleselect() {
  let obj = {
    id: Math.random() * 100 + 10,
    type: "select",
    label: "Sample Select",
    options: ["Sample Option", "Sample Option", "Sample Option"],
  };
  ldata.push(obj);
  renderdata();
});

textarea.addEventListener("click", function handletextarea() {
  let obj = {
    id: Math.random() * 100 + 10,
    type: "textarea",
    label: "Sample Textarea",
    placeholder: "Sample Placeholder",
  };
  ldata.push(obj);
  renderdata();
});

checkbox.addEventListener("click", function handlecheckbox() {
  let obj = {
    id: Math.random() * 100 + 10,
    type: "checkbox",
    label: "Sample Checkbox",
  };
  ldata.push(obj);
  renderdata();
});

function handledelete(id) {
  ldata = ldata.filter((ele) => ele.id != id);
  savedata();
  renderdata();
}

// Drag and Drop Functions
let draggedItem = null;

function dragStart(event) {
  draggedItem = event.target;
  event.dataTransfer.effectAllowed = "move";
}

function dragOver(event) {
  event.preventDefault();
  event.dataTransfer.dropEffect = "move";
}

function drop(event) {
  event.preventDefault();
  if (!draggedItem) return;

  let targetItem = event.target.closest(".draggable-item");
  if (!targetItem || draggedItem === targetItem) return;

  let draggedIndex = draggedItem.getAttribute("data-index");
  let targetIndex = targetItem.getAttribute("data-index");

  // Swap elements in ldata array
  let temp = ldata[draggedIndex];
  ldata[draggedIndex] = ldata[targetIndex];
  ldata[targetIndex] = temp;

  savedata();
  renderdata();
}
