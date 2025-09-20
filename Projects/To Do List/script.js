document.addEventListener("DOMContentLoaded", function(){
    // Button for input form
    const addButton = document.getElementById("addButton");
    // Section where input form is created
    const formArea = document.getElementById("addForm");
    // Section where tasks are displayed
    const taskShowArea = document.getElementById("taskShowArea");
    // array to store tasks
    let tasks = [];
    // Counter for ID creation
    let count = 1;

    // when Add button gets clicked
    addButton.addEventListener("click", function(){

        // Removing top margin from taskShowArea
        // document.getElementById("taskSection").style.marginTop = "0px";
        taskShowArea.style.marginTop = "0px";
        // Adding top margin to form
        // formArea.style.marginTop = "80px";
        
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

        // Append Seperator to Form
        // form.appendChild(hr);

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
                // taskList.style.marginTop = "0px";
                // event.preventDefault();
                const data = {
                    id : count++,
                    name : inputName.value,
                    description : inputDesc.value,
                    completed : false
                };
        
                // storing collected data in the Task list
                tasks.push(data)

                console.log(data);
                
                
                // showTask(data)------------------------------
                
                // Create formatted task display
                const display = document.createElement("div");
                display.classList.add("taskDisplay");
                
                const header = document.createElement("div");
                header.classList.add("header");
                header.innerHTML = `<span>${data.id}.</span><span>${data.name}</span>`;
                
                const separator = document.createElement("div");
                separator.classList.add("separator");
                
                const description = document.createElement("div");
                const label = document.createElement("label");
                label.setAttribute("for", "description");
                // label.textContent = "Description: ";
                description.classList.add("description");
                description.textContent = `Description: ${data.description}`;
                
                display.appendChild(header);
                display.appendChild(separator);
                // display.appendChild(label);
                display.appendChild(description);
                taskShowArea.appendChild(display);
                
                // Remove form after submission
                taskContainer.remove();
            }
        });

        // Form Cancel Button 
        cancelBtn.addEventListener("click", function(){
        addButton.disabled = false;

        taskContainer.remove();
        });
    })
    

});


