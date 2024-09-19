import AssignmentList from "./AssignmentList.js";

export default {
    components: {
        AssignmentList
    },
    template: `
        <div class="space-y-6">
            <assignment-list :tasks="incompleteTasks" title="Incomplete" />
            <assignment-list :tasks="completedTasks" title="Completed" />
            <form @submit.prevent="addTask">
                <div class="border border-gray-800 text-black">
                    <input v-model="newTask" type="text" class="p-2" placeholder="New assignment...">
                    <button type="submit" class="bg-white border-l px-4 py-2 font-bold">Add</button>
                </div>
            </form>
        </div>
    `,
    data() {
        return {
            newTask: '',
            tasks: [
                { id: 1, name: "Learn Javascript", completed: false },
                { id: 2, name: "Learn Vue", completed: false },
                { id: 3, name: "Learn Quasar", completed: false },
            ],
        };
    },
    methods: {
        addTask() {
            this.tasks.push({
                id: this.tasks.length + 1,
                name: this.newTask,
                completed: false,
            });

            this.newTask = "";
        }
    },
    computed: {
        incompleteTasks() {
            return this.tasks.filter((task) => !task.completed);
        },
        completedTasks() {
            return this.tasks.filter((task) => task.completed);
        },
    },
}