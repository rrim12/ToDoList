let user = document.querySelector("#user"),
    add = document.querySelector("#add"),
    tabs = document.querySelectorAll(".tabs li");

let mode = "all";
let filterList = [];
let taskList = []; //입력한 값을 감을 수 있는 배열

add.addEventListener("click", addTask);

function addTask() {
    // console.log(taskList);
    let task = {
        id: randomId(), //고유번호
        taskContent: user.value,
        isComplete: false,
    };

    taskList.push(task);
    // console.log(taskList);

    user.value = "";
    render();
}

//화면에 보여줌
function render() {
    let result = "";

    let list = [];
    if (mode == "all") {
        list = taskList;
    } else {
        list = filterList;
    }
    for (let i = 0; i < list.length; i++) {
        if (list[i].isComplete == true) {
            result += `   
            <div class="task">
            <div class="task_done">${list[i].taskContent}</div>
            <div>
                <button onclick = "complete(${list[i].id})">check</button>
                <button onclick = "deleteTask(${list[i].id})">delete</button>
            </div>
        </div>`;
        } else {
            result += `   
            <div class="task">
            <div>${list[i].taskContent}</div>
            <div>
                <button onclick = "complete(${list[i].id})">check</button>
                <button onclick = "deleteTask(${list[i].id})">delete</button>
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
    // console.log(taskList);
    // render();
    filter();
}

randomId();
//체크버튼을 클릭하면 모두 true로 변경 날자르르 이용해서 index번호 만듬
function randomId() {
    // console.log(Date.now());
    return Date.now();
}

function deleteTask(id) {
    console.log("삭제");
    for (let i = 0; i < taskList.length; i++) {
        if (taskList[i].id == id) {
            // taskList[i].isComplete = true;
            taskList.splice(i, 1);
        }
    }
    // render();
    filter();
}

//tabs변경
tabs.forEach((tab, index) => {
    tab.addEventListener("click", (event) => {
        // console.log(index);
        tabs.forEach((tab) => {
            tab.classList.remove("on");
        });
        tabs[index].classList.add("on");
        filter(event);
    });
});

function filter(event) {
    // console.log(event);
    // console.log(event.target.id); //이벤트 타겟의 아이디를 추출
    if (event) {
        mode = event.target.id;
    }
    filterList = [];

    add.addEventListener("click", addTask);

    function addTask() {}
    if (mode == "all") {
        console.log("all");
        render();
    } else if (mode == "going") {
        console.log("going");
        for (let i = 0; i < taskList.length; i++) {
            if (taskList[i].isComplete == false) {
                filterList.push(taskList[i]);
            }
            console.log("진행중", filterList);
        }
        render();
    } else {
        // console.log("done");
        for (let i = 0; i < taskList.length; i++) {
            if (taskList[i].isComplete == true) {
                filterList.push(taskList[i]);
            }
            console.log("끝남", filterList);
        }
        render();
    }
}
