document.addEventListener("DOMContentLoaded", function(){
    // Search Button
    const searchBtn = document.getElementById("searchButton");
    // Button for input form
    const addButton = document.getElementById("addButton");
    // Section where input form is created
    const formArea = document.getElementById("addForm");
    // Section where tasks are displayed
    const taskShowArea = document.getElementById("taskShowArea");
    // Counter for ID creation
    let count = 1;
    // array to store tasks
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];


    // iterate through each element
    tasks.forEach(task => renderTask(task));

    // search
    document.getElementById("searchForm").addEventListener("submit", function(e) {
        e.preventDefault();
    });
    searchBtn.addEventListener('click', function(){
        // arra for search
        let searchTasks = [];
        let searchValue = String(document.getElementById("searchBar").value).trim();
        tasks.forEach(task => {
            if(String(task.id).includes(searchValue))
            {
                searchTasks.push(task);
                console.log(`Matched item: ${task.id}`);
            }
            else if(String(task.name).includes(searchValue))
            {
                searchTasks.push(task);
                console.log(`Matched item: ${task.name}`);
            }
            else if(String(task.description).includes(searchValue))
            {
                searchTasks.push(task);
                console.log(`Matched item: ${task.description}`);
            }
            // else if(String(task.completed).includes(searchTasks))
            // {
            //     searchTasks.push(task);
            //     console.log(`Matched item: ${task.completed}`);
            // }
        });
        taskShowArea.innerHTML = ""; // clear previous results
        searchTasks.forEach(task => renderTask(task));
    });

    // when Add button gets clicked
    addButton.addEventListener("click", function(){

        taskShowArea.style.marginTop = "0px";
        
        // Disabling Add Button
        addButton.disabled = true;

        // Creating Input Form--------------------

        // Create task container
        const taskContainer = document.createElement('div');
        taskContainer.id = "addNewItem";

        taskContainer.style.marginTop = "80px";

        // Create left icon or checkbox
        const taskIcon = document.createElement('div');
        taskIcon.textContent = 'O'; // or use a checkbox later

        // Append left icon to Task Container
        taskContainer.appendChild(taskIcon);

        // Create form
        const form = document.createElement('form');
        form.setAttribute('action', '/addNewForm');
        form.id = 'addNewItemForm';

        // Name
        const inputName = document.createElement('input');
        inputName.id = 'taskName';
        inputName.type = 'text';
        inputName.placeholder = 'Name';

        // Separator
        const hr = document.createElement('hr');

        // Description box
        const descAndButtons = document.createElement('div');
        descAndButtons.className = 'descriptionRow'; // new wrapper

        // Description input
        const inputDesc = document.createElement('input');
        inputDesc.id = 'taskDescription';
        inputDesc.type = 'text';
        inputDesc.placeholder = 'Description...';
        

        // Create button
        const createBtn = document.createElement('button');
        createBtn.type = "submit";
        createBtn.id = "createButton";
        createBtn.textContent = "Create";
        descAndButtons.appendChild(createBtn);

        // Cancel button
        const cancelBtn = document.createElement('button');
        cancelBtn.type = "button"; // changed from submit
        cancelBtn.id = "cancelButton";
        cancelBtn.textContent = "Cancel";
        

        // Append Name to Form
        form.appendChild(inputName);

        // Append Description input to Form
        form.appendChild(inputDesc);

        // Append Create Button
        descAndButtons.appendChild(createBtn);

        // Append Cancel Button
        descAndButtons.appendChild(cancelBtn);

        // Append Description to form
        form.appendChild(descAndButtons);

        // Append form to task container
        taskContainer.appendChild(form);

        // Append whole task container to Add Form section
        formArea.appendChild(taskContainer);

        // Form Submit Button
        form.addEventListener("submit", function(event){
            event.preventDefault();
            // if the list is empty
            if(inputName.value === "")
            {
                    addButton.disabled = false;
                    taskContainer.remove();
            }
            else
            {
                addButton.disabled = false;

                const data = {
                    id : Date.now(),
                    name : inputName.value,
                    description : inputDesc.value,
                    completed : false
                };
        
                // storing collected data in the Task list
                tasks.push(data)

                // Storing task in LocalStorage
                saveTasks();
                renderTask(data);
                
                taskContainer.remove();
            }
        });

        // Form Cancel Button 
        cancelBtn.addEventListener("click", function(){
        addButton.disabled = false;

        taskContainer.remove();
        });
    })

    

    function renderTask(data){

        console.log(data);
        
        // Create formatted task display
        const display = document.createElement("div");
        display.classList.add("taskDisplay");
        
        // First Row
        const header = document.createElement("div");
        header.classList.add("header");
        let ID = data.id - (Math.floor(data.id/1000000000)*1000000000);
        header.innerHTML = `<span>ID: ${ID}</span><span>${data.name}</span>`;
        
        // Seperator
        const separator = document.createElement("div");
        separator.classList.add("separator");
        
        // Second Row
        const description = document.createElement("div");
        description.id = "showTaskDescription"
        const label = document.createElement("label");
        label.setAttribute("for", "description");
        description.classList.add("description");
        description.textContent = `Description: ${data.description}`;

        const del = document.createElement('button');
        del.id = "deleteBtn";
        del.type = "button";
        del.textContent = "Delete";
        
        const edit = document.createElement('button');
        edit.id = "editBtn";
        edit.type = "button";
        edit.textContent = "Edit";

        const btns = document.createElement('div');
        btns.id = "btns"
        
        // Append elements to taskShowArea
        display.appendChild(header);
        display.appendChild(separator);
        btns.appendChild(edit);
        btns.appendChild(del);
        display.appendChild(description);
        display.appendChild(btns);
        taskShowArea.appendChild(display);

        display.addEventListener('click', (e)=>{
            if(e.target.tagName === "BUTTON") return;
            data.completed = !data.completed;
            display.classList.toggle("completed");
            saveTasks();
        })

        // Code of Delete Button
        display.querySelector("#deleteBtn").addEventListener("click", (e)=>{
            e.stopPropagation()     // prevent toggle from firing
            tasks = tasks.filter(t => t.id !== data.id);
            display.remove();
            saveTasks();
        })

        // Inside renderTask(data), after creating the edit button:
        edit.addEventListener("click", function(e) {
            e.stopPropagation(); // Prevent toggling completed state

            // Create an edit form
            const editForm = document.createElement("form");
            editForm.id = "editForm";
            // editForm.className = "editForm";

            // Container for first row
            const editFormFirstRow = document.createElement('div');
            editFormFirstRow.id = "editFormFirstRow";

            // Name input
            const editName = document.createElement("input");
            editName.id = "editFormName";
            editName.type = "text";
            editName.value = data.name;

            // Description input
            const editDesc = document.createElement("input");
            editDesc.id = "editFormDesc";
            editDesc.type = "text";
            editDesc.value = data.description;

            // Container for first row
            const editFormSecondRow = document.createElement('div');
            editFormSecondRow.id = "editFormSecondRow";

            // Save button
            const saveBtn = document.createElement("button");
            saveBtn.id = "editFormSaveBtn";
            saveBtn.type = "submit";
            saveBtn.textContent = "Save";

            // Cancel button
            const cancelBtn = document.createElement("button");
            cancelBtn.id = "editFormCancelBtn";
            cancelBtn.type = "button";
            cancelBtn.textContent = "Cancel";



            // Append inputs and buttons to containers
            editFormFirstRow.appendChild(editName);
            editFormFirstRow.appendChild(editDesc);
            editForm.appendChild(editFormFirstRow);
            // editForm.appendChild(editDesc);
            editFormSecondRow.appendChild(saveBtn);
            editFormSecondRow.appendChild(cancelBtn);
            editForm.appendChild(editFormSecondRow);
            // editForm.appendChild(cancelBtn);

            // Replace the display with the edit form
            display.innerHTML = "";
            display.appendChild(editForm);

            // Save changes
            editForm.addEventListener("submit", function(ev) {
                ev.preventDefault();
                data.name = editName.value;
                data.description = editDesc.value;
                saveTasks();
                // display.innerHTML = ""; // Clear and re-render
                display.remove();
                renderTask(data);
            });

            // Cancel editing
            cancelBtn.addEventListener("click", function() {
                // display.innerHTML = "";
                display.remove();
                renderTask(data);
            });
        });
    }

    function saveTasks()
    {
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }
});


