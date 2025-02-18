const addBtn = document.getElementById('addBtn');
        const closeBtn = document.getElementById('closeBtn');
        const appInputTask = document.querySelector('.appInputTask');
        const appTaskList = document.querySelector('.appTaskList');
        const appForm = document.querySelector('.appForm');
        const appTaskItem = document.querySelector('.appTaskItem');

        addBtn.addEventListener('click', showForm);
        function showForm() {
            const form = document.querySelector('.appForm');
            form.classList.add('appForm-active')
        }

        closeBtn.addEventListener('click', closeForm);
        function closeForm() {
            const form = document.querySelector('.appForm');
            form.classList.remove('appForm-active')
        }


        appForm.addEventListener('submit', addTask);
        function addTask() {
            event.preventDefault();
            

            if (appInputTask.value === '') {
                const errMsg = document.querySelector('.errMsg');
                errMsg.innerHTML = 'Please enter a task';
                errMsg.classList.add('errMsg-active');

                setTimeout(() => {
                    errMsg.innerHTML = '';
                    errMsg.classList.remove('errMsg-active');
                }, 1800);

                return;
            }
            
            const task = document.createElement('li');
            // task.classList.add('appTaskItem');
            setTimeout(() => task.classList.add('appTaskItem'),
            task.innerHTML = `
                <p>${appInputTask.value}</p>
                <span class="material-symbols-outlined icon" id="deleteBtn">
                    close
                </span>
            `, 100);
          ;

            const deleteBtn = task.querySelector('#deleteBtn');
            deleteBtn.addEventListener('click', deleteTask);
            function deleteTask() {
                task.classList.add('appTaskItem-remove');
                setTimeout(() => task.remove(), 300); 
            }
            
            const form = document.querySelector('.appForm');
            form.classList.remove('appForm-active')

            appTaskList.appendChild(task);
            appInputTask.value = '';
            
        }