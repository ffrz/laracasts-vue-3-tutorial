import AssignmentList from "./AssignmentList.js";
import AssignmentEditor from "./AssignmentEditor.js";

export default {
    components: {
        AssignmentList, AssignmentEditor
    },
    template: `
        <div class="space-y-6">
            <assignment-list :tasks="incompleteTasks" title="Incomplete" />
            <assignment-list :tasks="completedTasks" title="Completed" />
            <assignment-editor @addOrUpdate="addTask" />
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