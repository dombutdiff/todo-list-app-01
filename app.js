// intro form
const introForm = document.querySelector(".introForm");
const introInput = document.querySelector(".introInput");
const main = document.querySelector(".main");

// Check if a user name is already stored in localStorage
document.addEventListener("DOMContentLoaded", function () {
  const savedName = localStorage.getItem("userName");
  if (savedName) {
    document.querySelector(".userName").innerHTML = savedName;
    introForm.classList.add("introForm-remove");
    main.classList.add("main-active");
  }

  document.getElementById("resetBtn").addEventListener("click", function () {
    localStorage.removeItem("userName"); // Clear the saved name
    location.reload(); // Refresh the page to show the intro form again
  });
});

introForm.addEventListener("submit", submitIntroForm);
function submitIntroForm() {
  event.preventDefault();

  if (introInput.value === "") {
    const errMsg = document.querySelector(".errMsg");
    errMsg.innerHTML = "Please enter your name";
    errMsg.classList.add("errMsg-active");

    setTimeout(() => {
      errMsg.innerHTML = "";
      errMsg.classList.remove("errMsg-active");
    }, 1800);

    return;
  } else {
    const userName = document.querySelector(".userName");
    const formattedName =
      introInput.value.charAt(0).toUpperCase() + introInput.value.slice(1);

    // Store the name in localStorage
    localStorage.setItem("userName", formattedName);

    userName.innerHTML = formattedName;

    setTimeout(() => {
      introForm.classList.add("introForm-remove");
    }, 300);

    introInput.value = "";

    setTimeout(() => {
      main.classList.add("main-active");
    }, 1200);
  }
}

//main form
const addBtn = document.getElementById("addBtn");
const closeBtn = document.getElementById("closeBtn");
const appInputTask = document.querySelector(".appInputTask");
const appTaskList = document.querySelector(".appTaskList");
const appForm = document.querySelector(".appForm");
const appTaskItem = document.querySelector(".appTaskItem");

addBtn.addEventListener("click", showForm);
function showForm() {
  const form = document.querySelector(".appForm");
  form.classList.add("appForm-active");
}

closeBtn.addEventListener("click", closeForm);
function closeForm() {
  const form = document.querySelector(".appForm");
  form.classList.remove("appForm-active");
}

let counter = 0;
function updateCounter() {
  document.querySelector(".counter").innerHTML = counter;
}

appForm.addEventListener("submit", addTask);
function addTask() {
  event.preventDefault();

  if (appInputTask.value === "") {
    const errAppMsg = document.querySelector(".errAppMsg");
    errAppMsg.innerHTML = "Please enter your name";
    errAppMsg.classList.add("errMsg-active");

    setTimeout(() => {
      errAppMsg.innerHTML = "";
      errAppMsg.classList.remove("errMsg-active");
    }, 1800);

    return;
  } else {
    const task = document.createElement("li");
    counter++;
    updateCounter();
    // task.classList.add('appTaskItem');
    setTimeout(
      () => task.classList.add("appTaskItem-add"),
      task.classList.add("appTaskItem"),
      (task.innerHTML = `
                <p>${appInputTask.value}</p>
                <span class="material-symbols-outlined icon" id="deleteBtn">
                    close
                </span>
            `),
      100
    );

    const deleteBtn = task.querySelector("#deleteBtn");
    deleteBtn.addEventListener("click", deleteTask);
    function deleteTask() {
      task.classList.add("appTaskItem-remove");
      setTimeout(() => task.remove(), 300);

      counter--;
      updateCounter();
    }

    const form = document.querySelector(".appForm");
    form.classList.remove("appForm-active");

    appTaskList.appendChild(task);
    appInputTask.value = "";
  }
}
