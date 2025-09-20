document.addEventListener("DOMContentLoaded", function(){
    // 🔹 Select important elements
    const searchBtn = document.getElementById("searchButton");   // Search button
    const addButton = document.getElementById("addButton");      // Add button to open form
    const formArea = document.getElementById("addForm");         // Area where new-task form will appear
    const taskShowArea = document.getElementById("taskShowArea");// Area where tasks are displayed

    let count = 1;                                               // Counter (not currently used for ID)
    let tasks = JSON.parse(localStorage.getItem("tasks")) || []; // Load tasks from localStorage (or empty array)

    // 🔹 Render all stored tasks when page first loads
    tasks.forEach(task => renderTask(task));

    // ───────────────────────────────
    // SEARCH FEATURE
    // ───────────────────────────────
    document.getElementById("searchForm").addEventListener("submit", function(e) {
        e.preventDefault(); // Prevent default page reload
    });

    searchBtn.addEventListener('click', function(){
        let searchTasks = []; // Stores matched tasks
        let searchValue = String(document.getElementById("searchBar").value).trim();

        // Loop through all tasks and find matches
        tasks.forEach(task => {
            if (String(task.id).includes(searchValue)) {
                searchTasks.push(task);
                console.log(`Matched item: ${task.id}`);
            }
            else if (String(task.name).includes(searchValue)) {
                searchTasks.push(task);
                console.log(`Matched item: ${task.name}`);
            }
            else if (String(task.description).includes(searchValue)) {
                searchTasks.push(task);
                console.log(`Matched item: ${task.description}`);
            }
        });

        // Clear previous tasks & display only search results
        taskShowArea.innerHTML = "";
        searchTasks.forEach(task => renderTask(task));
    });

    // ───────────────────────────────
    // ADD NEW TASK (OPEN FORM)
    // ───────────────────────────────
    addButton.addEventListener("click", function(){
        taskShowArea.style.marginTop = "0px";
        addButton.disabled = true;  // Prevent opening multiple forms

        // Create container for the form
        const taskContainer = document.createElement('div');
        taskContainer.id = "addNewItem";
        taskContainer.style.marginTop = "80px";

        // Left icon/checkbox placeholder
        const taskIcon = document.createElement('div');
        taskIcon.textContent = 'O'; 
        taskContainer.appendChild(taskIcon);

        // Create actual form
        const form = document.createElement('form');
        form.setAttribute('action', '/addNewForm');
        form.id = 'addNewItemForm';

        // Task name input
        const inputName = document.createElement('input');
        inputName.id = 'taskName';
        inputName.type = 'text';
        inputName.placeholder = 'Name';

        // Task description input
        const inputDesc = document.createElement('input');
        inputDesc.id = 'taskDescription';
        inputDesc.type = 'text';
        inputDesc.placeholder = 'Description...';

        // Wrapper for Create + Cancel buttons
        const descAndButtons = document.createElement('div');
        descAndButtons.className = 'descriptionRow';

        // Create button
        const createBtn = document.createElement('button');
        createBtn.type = "submit";
        createBtn.id = "createButton";
        createBtn.textContent = "Create";
        descAndButtons.appendChild(createBtn);

        // Cancel button
        const cancelBtn = document.createElement('button');
        cancelBtn.type = "button";
        cancelBtn.id = "cancelButton";
        cancelBtn.textContent = "Cancel";
        descAndButtons.appendChild(cancelBtn);

        // Append inputs and buttons into form
        form.appendChild(inputName);
        form.appendChild(inputDesc);
        form.appendChild(descAndButtons);

        // Append form to container → container to formArea
        taskContainer.appendChild(form);
        formArea.appendChild(taskContainer);

        // ───── Handle Create (form submit)
        form.addEventListener("submit", function(event){
            event.preventDefault();
            if(inputName.value === "") {
                // If no name, just remove form
                addButton.disabled = false;
                taskContainer.remove();
            }
            else {
                addButton.disabled = false;

                // Create new task object
                const data = {
                    id : Date.now(),             // unique ID using timestamp
                    name : inputName.value,
                    description : inputDesc.value,
                    completed : false
                };

                // Add to array + save
                tasks.push(data);
                saveTasks();

                // Render on screen
                renderTask(data);

                // Remove the form after submission
                taskContainer.remove();
            }
        });

        // ───── Handle Cancel
        cancelBtn.addEventListener("click", function(){
            addButton.disabled = false;
            taskContainer.remove();
        });
    });

    // ───────────────────────────────
    // RENDER TASK FUNCTION
    // ───────────────────────────────
    function renderTask(data){
        const display = document.createElement("div");
        display.classList.add("taskDisplay");

        // Header row (ID + Name)
        const header = document.createElement("div");
        header.classList.add("header");
        // Shorten the timestamp ID
        let ID = data.id - (Math.floor(data.id/1000000000)*1000000000);
        header.innerHTML = `<span>ID: ${ID}</span><span>${data.name}</span>`;

        // Separator line
        const separator = document.createElement("div");
        separator.classList.add("separator");

        // Description row
        const description = document.createElement("div");
        description.id = "showTaskDescription";
        description.classList.add("description");
        description.textContent = `Description: ${data.description}`;

        // Edit & Delete buttons
        const del = document.createElement('button');
        del.id = "deleteBtn";
        del.type = "button";
        del.textContent = "Delete";

        const edit = document.createElement('button');
        edit.id = "editBtn";
        edit.type = "button";
        edit.textContent = "Edit";

        // Button wrapper
        const btns = document.createElement('div');
        btns.id = "btns";
        btns.appendChild(edit);
        btns.appendChild(del);

        // Assemble task
        display.appendChild(header);
        display.appendChild(separator);
        display.appendChild(description);
        display.appendChild(btns);
        taskShowArea.appendChild(display);

        // ───── Toggle Completed on Click
        display.addEventListener('click', (e)=>{
            if(e.target.tagName === "BUTTON") return; // Ignore button clicks
            data.completed = !data.completed;
            display.classList.toggle("completed");
            saveTasks();
        });

        // ───── Delete Task
        del.addEventListener("click", (e)=>{
            e.stopPropagation(); // Prevent toggle
            tasks = tasks.filter(t => t.id !== data.id); // Remove from array
            display.remove();                            // Remove from UI
            saveTasks();
        });

        // ───── Edit Task
        edit.addEventListener("click", function(e) {
            e.stopPropagation(); // Prevent toggle

            // Create edit form
            const editForm = document.createElement("form");
            editForm.id = "editForm";

            // First row (name + desc)
            const editFormFirstRow = document.createElement('div');
            editFormFirstRow.id = "editFormFirstRow";

            const editName = document.createElement("input");
            editName.id = "editFormName";
            editName.type = "text";
            editName.value = data.name;

            const editDesc = document.createElement("input");
            editDesc.id = "editFormDesc";
            editDesc.type = "text";
            editDesc.value = data.description;

            editFormFirstRow.appendChild(editName);
            editFormFirstRow.appendChild(editDesc);

            // Second row (buttons)
            const editFormSecondRow = document.createElement('div');
            editFormSecondRow.id = "editFormSecondRow";

            const saveBtn = document.createElement("button");
            saveBtn.id = "editFormSaveBtn";
            saveBtn.type = "submit";
            saveBtn.textContent = "Save";

            const cancelBtn = document.createElement("button");
            cancelBtn.id = "editFormCancelBtn";
            cancelBtn.type = "button";
            cancelBtn.textContent = "Cancel";

            editFormSecondRow.appendChild(saveBtn);
            editFormSecondRow.appendChild(cancelBtn);

            // Put everything inside editForm
            editForm.appendChild(editFormFirstRow);
            editForm.appendChild(editFormSecondRow);

            // Replace task display with edit form
            display.innerHTML = "";
            display.appendChild(editForm);

            // ───── Save edited task
            editForm.addEventListener("submit", function(ev) {
                ev.preventDefault();
                data.name = editName.value;
                data.description = editDesc.value;
                saveTasks();
                display.remove();   // Remove old view
                renderTask(data);   // Re-render with updated values
            });

            // ───── Cancel edit
            cancelBtn.addEventListener("click", function() {
                display.remove();
                renderTask(data);
            });
        });
    }

    // ───────────────────────────────
    // SAVE TO LOCAL STORAGE
    // ───────────────────────────────
    function saveTasks() {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
});
