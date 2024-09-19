import AssignmentList from "./AssignmentList.js";

export default {
    components: {
        AssignmentList
    },
    template: `
        <div class="space-y-6">
            <assignment-list :tasks="incompleteTasks" title="Incomplete" />
            <assignment-list :tasks="completedTasks" title="Completed" />
        </div>
    `,
    data() {
        return {
            tasks: [
                { id: 1, name: "Learn Javascript", completed: false },
                { id: 2, name: "Learn Vue", completed: false },
                { id: 3, name: "Learn Quasar", completed: false },
            ],
        };
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