// let a = +prompt();
// let b = +prompt();
// let summa = 0;
// for (let i = a; i < b; i++) {
//   summa += i
// }
// alert(summa);

// for (let i = 0; i < 10; i++) {
//   if (i == 4 || i == 7) {
//     continue;
//   }
//   alert(i);
// }

// let arr = ["apple", 5];
// for (let i = 0; i < arr.length; i++) {
//   alert(arr[i]);
// }

// const titleEls = document.querySelectorAll(".title");
// console.log(titleEls);

// for (let i = 0; i < titleEls.length; i++) {
//   titleEls[i].addEventListener("click", function () {
//     titleEls[i].style.color = "blue";
//   });
// }

// function summa(a, b) {
//   let result = a + b;
//   return result;
// }
// resultSumm = summa(5, 7);
// alert(resultSumm);

// function black_list(name) {
//   let list_name = ["petya", "vasya", "kolya"];
//   if (name in list_name) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function greeting(name) {
//   if (black_list(name)) {
//     alert(`privet, ${name}`);
//   } else {
//     alert("di naxu");
//   }
// }

// let name = prompt("adad");
// greeting(name);

// let greet = (name) => {
//   alert(name);
// };

// let arr = [1, 2, 3];
// arr.push(6);
// alert(arr);

// function createEl(tag, text) {
//   const newEl = document.createElement(tag);
//   newEl.textContent = text;

//   const bodyEl = document.querySelector("body");

//   bodyEl.append(newEl);
// }
// w;
// createEl("h1", "adawwwdada");
// createEl("button", "click me");

// let user = {
//   name: "John",
//   age: 30,
// };
// console.log(user);

// let journal = {
//   kirill: [5, 4, 6, 3],
//   ivan: [5, 5, 4, 2, 5],
//   ada: [2, 2, 2, 2],
// };
// console.log(journal);

// for (let key in journal) {
//     alert(journal[key])
// }

// alert("kirill" in journal);
// if ("ivan" in journal) {
//   alert(journal.ivan);
// } else {
//   alert("такого ключа нету");
// }

// let user = {
//   status: "Admin",
// };
// if (user.status == "Admin") {
//   user.isPassed = "true";
// } else {
//   user.isPassed = false;
// }
// console.log(user);

// let user = {
//   name: "grigory",
//   loveGame: "dota",
//   say() {
//     alert(`${this.name} любит ${this.loveGame}`);
//   },
// };

// user.say();

// function createTask() {
//   let task = {
//     name: prompt("nazvanie zadachi"),
//   };
//   return task;
// }
// const tasks = [];

// const task = createTask();

// tasks.push(task);
// console.log(tasks);
// for (let task of tasks) {
//   const taskEl = document.createElement("div");
//   taskEl.innerHTML = task.name;
//   const bodyEl = document.querySelector("body");
//   bodyEl.append(taskEl);
// }

// const bodyEl = document.body;
// const childcontEl = bodyEl.children[0];
// const child1 = childcontEl.firstElementChild;
// const child2 = childcontEl.lastElementChild;
// console.log(childcontEl.firstElementChild);
// console.log(childcontEl.lastElementChild);

// const bodyEl = document.body;
// const childrenBody = bodyEl.children

// console.log(childrenBody[0]);
// console.log(childrenBody[1]);
// console.log(childrenBody[1].lastElementChild);

// const menuEl = document.querySelector(".menu")
// const itemsEls = document.querySelectorAll(".menu_item")
// console.log(itemsEls)

// const headerEl = document.querySelector(".header_cont");
// const logo = document.querySelector(".logo")
// const header_menu = document.querySelector(".header_menu")
// const btn = document.querySelector(".btn")
// console.log(btn)
// console.log(headerEl)
// console.log(logo)
// console.log(header_menu)

// const contEl = document.querySelector(".cont");
// console.log(contEl);
// console.log(contEl.children[0]);
// console.log(contEl.children[1]);

// const menuEl = document.querySelector(".menu");
// console.log(menuEl);
// console.log(menuEl.children[0]);
// console.log(menuEl.children[1]);
// console.log(menuEl.children[2]);
// console.log(menuEl.children[3]);
// const liEls = document.querySelectorAll("li");
// console.log(menuEl, liEls);

// const contEl = document.querySelector(".container");
// const h1El = document.querySelector(".container > h1");
// const inputEl = document.querySelector(".productName");
// const buttonEl = document.querySelector(".addProduct");
// const divEl = document.querySelector(".products");
// console.log(contEl, h1El, inputEl, buttonEl, divEl);

// function changeColor() {
//   h1El.Style.color = "blue";
// }
// buttonEl.addEventListener("click", function () {
//   h1El.style.color = "blue";
// });
// buttonEl.addEventListener("click", function () {
//   const productNameEl = document.querySelector(".productName");
//   const productDescEl = document.querySelector(".productDesc");
//   const productEl = document.createElement("div");
//   productEl.classList.add("product");

//   const titleEl = document.createAttribute.element("div");

//   const descEl = document.querySelector("p");

//   const buttonEl = document.querySelector("button");

//   buttonEl.classList.add("buy_sneaker");
// });

// const addProductEl = document.querySelector(".addProduct");
// const productsEl = document.querySelector(".products");

// addProductEl.addEventListener("click", function () {
//   const nameProductEl = document.querySelector(".nameProduct");
//   const priceProductEl = document.querySelector(".priceProduct");

//   const productEl = document.createElement("div");
//   productEl.classList.add("product");

//   const titleProductEl = document.createElement("h2");
//   titleProductEl.classList.add("titleProduct");
//   titleProductEl.textContent = nameProductEl.value;

//   const costProductEl = document.createElement("p");
//   costProductEl.classList.add("costProduct");

//   const buyProductEl = document.createElement("button");
//   buyProductEl.classList.add("buy_sneaker");
//   buyProductEl.textContent = "dobavit v korsinu";

//   buyProductEl.addEventListener("click", function (event) {
//     alert("tovar dobavlen");
//     console.log(event);
//     event.stopPropagation();
//   });

//   productEl.append(titleProductEl);
//   productEl.append(costProductEl);
//   productEl.append(buyProductEl);

//   costProductEl.textContent = priceProductEl.value;
//   const deleteProductEl = document.createElement("span");

//   deleteProductEl.classList.add("deleteProduct");
//   deleteProductEl.textContent = "X";
//   deleteProductEl.addEventListener("click", function () {
//     deleteProductEl.closest(".product").remove();
//   });

//   productEl.append(deleteProductEl);
//   productEl.append(titleProductEl);
//   productEl.append(costProductEl);

//   const productsEl = document.querySelector(".products");
//   productsEl.append(productEl);
// });

// productsEl.addEventListener("click", function (event) {
//   const target = event.target;
//   console.log(target);
//   if (target.classList.contains("product")) {
//     target.style.background = "red";
//   }
// });

// const batonEl = document.querySelector(".baton")
// batonEl.addEventListener("click", function (event) {
//   const target = event.target;
//   if (target.classList.contains("baton")) {
//     target.style.background = "red";
//   }
// });

const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const addBtnEl = document.querySelector(".task_add");
addBtnEl.addEventListener("click", function () {
  const taskName = prompt("vedite nazvanie zadachis");
  const task = {
    taskName: taskName,
    isDone: false,
  };

  tasks.push(task);

  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks(tasks);
  console.log(tasks);
});

function renderTasks(tasks) {
  const tasksEl = document.querySelector(".tasks");
  tasksEl.replaceChildren();

  tasks.forEach((task, i) => {
    const taskEl = document.createElement("div");
    taskEl.classList.add("task");
    const checkboxEl = document.createElement("input");
    checkboxEl.type = "checkbox";
    checkboxEl.classList.add("task_checkbox");
    if (task.isDone == true) {
      checkboxEl.checked = true;
      taskEl.classList.add("done");
    }

    checkboxEl.addEventListener("click", () => {
      if (checkboxEl.checked == true) {
        taskNameEl.classList.add("done");
        task.isDone = true;
        localStorage.setItem("tasks", JSON.stringify(tasks));
      } else {
        taskNameEl.classList.remove("done");
        task.isDone = false;
        localStorage.setItem("tasks", JSON.stringify(tasks));
      }
    });
    const taskNameEl = document.createElement("h3");
    taskNameEl.textContent = task.taskName;
    taskNameEl.classList.add("task_name");

    const delBtnEl = document.createElement("img");
    delBtnEl.src = "./free-icon-trash-17140007.png";
    delBtnEl.classList.add("task_del");

    delBtnEl.addEventListener("click", function (event) {
      const delTaskEl = event.target.closest(".task");
      tasks.splice(i, 1);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      delTaskEl.remove();
    });

    taskEl.append(checkboxEl);
    taskEl.append(taskNameEl);
    taskEl.append(delBtnEl);

    tasksEl.append(taskEl);
  });
}

const searchTaskEl = document.querySelector(".searchTask");

searchTaskEl.addEventListener("input", () => {
  const searchValue = searchTaskEl.value.toLowerCase();
  const searchedTasks = tasks.filter(
    (task) => task.taskName.toLowerCase().startsWith(searchValue),
    searchValue,
  );

  renderTasks(searchedTasks);
});

const sortTasksEl = document.querySelector(".sortTasks");

sortTasksEl.addEventListener("change", () => {
  const completedTasks = tasks.filter((task) => task.isDone == true);
  const notCompletedTasks = tasks.filter((task) => task.isDone == false);

  if (sortTasksEl.value == "Completed") {
    renderTasks(completedTasks);
  } else if (sortTasksEl.value == "notCompleted") {
    renderTasks(notCompletedTasks);
  } else {
    renderTasks(tasks);
    sortTasksEl.value = "ALL";
  }
});
renderTasks(tasks);
