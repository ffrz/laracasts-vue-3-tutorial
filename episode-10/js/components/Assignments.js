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
    data() {
        return {
            tasks: [
                { id: 1, name: "Learn Javascript", completed: false, tag: 'js' },
                { id: 2, name: "Learn Vue", completed: false, tag: 'framework' },
                { id: 3, name: "Learn Quasar", completed: false, tag: 'framework' },
            ],
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