import AssignmentList from "./AssignmentList.js";
import AssignmentEditor from "./AssignmentEditor.js";

export default {
    components: {
        AssignmentList, AssignmentEditor
    },
    template: `
        <div class="flex gap-5">
            <assignment-list :tasks="incompleteTasks" title="Incomplete">
                <assignment-editor @addOrUpdate="addTask" />
            </assignment-list>
            <assignment-list v-if="showCompleted"
                :tasks="completedTasks"
                closable
                @closeRequested="showCompleted = !showCompleted"
                title="Completed" />
            
        </div>
    `,
    created() {
        fetch('http://localhost:3000/tasks')
            .then(response => response.json())
            .then(tasks => {
                this.tasks = tasks;
            })
    },
    data() {
        return {
            tasks: [],
            showCompleted: true,
        };
    },
    methods: {
        addTask(task) {
            this.tasks.push({
                id: this.tasks.length + 1,
                name: task,
                completed: false,
                tag: 'uncategorized',
            });
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