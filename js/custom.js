let user = document.querySelector("#user"),
    add = document.querySelector("#add"),
    task = document.querySelector(".task");
console.log(user);
let taskList = []; //입력한 값을 감을 수 있는 배열
add.addEventListener("click", addTask);
function addTask() {
    // taskContent = user.value;
    // taskList.push(taskContent);
    // console.log(taskList);
    let task = {
        id: randomId(), //고유번호
        taskContent: user.value,
        isComplete: false,
    };

    taskList.push(task);
    console.log(taskList);

    user.value = "";
    render();
}

//화면에 보여줌
function render() {
    console.log("render");
    let result = "";
    for (let i = 0; i < taskList.length; i++) {
        //     result += `
        //     <div class="task">
        //     <div>${taskList[i].taskContent}</div>
        //     <div>
        //         <button onclick = "complete()">check</button>
        //         <button>delete</button>
        //     </div>
        // </div>`;
        if (taskList[i].isComplete == true) {
            result += `   
            <div class="task">
            <div class="task_done">${taskList[i].taskContent}</div>
            <div>
                <button onclick = "complete(${taskList[i].id})">check</button>
                <button>delete</button>
            </div>
        </div>`;
        } else {
            result += `   
            <div class="task">
            <div>${taskList[i].taskContent}</div>
            <div>
                <button onclick = "complete(${taskList[i].id})">check</button>
                <button>delete</button>
            </div>
        </div>`;
        }
    }
    document.querySelector("#taskBoard").innerHTML = result;
}
function complete(id) {
    console.log("체크");
    for (let i = 0; i < taskList.length; i++) {
        if (taskList[i].id == id) {
            // taskList[i].isComplete = true;
            taskList[i].isComplete = !taskList[i].isComplete;
        }
    }
    render();
}
randomId();

function randomId() {
    // console.log(Date.now());
    return Date.now();
}
