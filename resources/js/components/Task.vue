<template>
    <div class='row' style="margin-top: 10%;">
            <div class="input-group">
                <input placeholder="Enter a new task..." v-model="task.task_name"  v-on:keyup.enter="createTask()" type="text" name="task_name" class="form-control" autofocus >
            </div>
         <ul class="list-group pt-4">
            <li v-if='list.length === 0'>There are no tasks!</li>
            <li v-for="task in list">
                 {{ task.task_name }}
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                list: [],
                task: {
                    id: '',
                    task_name: ''
                }
            };
        },
        
        created() {
            this.fetchTaskList();
        },
        
        methods: {
             fetchTaskList() {
                this.axios.get('api/tasks')
                    .then((res) => {
                            this.list = res.data;
                            console.log( this.list);
                    })
			        .catch((err) => console.error(err));
            },
 
            createTask() {
                this.axios.post('api/tasks', this.task)
                    .then((res) => {
                        this.task.task_name = '';
                        this.fetchTaskList();
                    })
                    .catch((err) => console.error(err));
            },          
        }
    }
</script>
</script>