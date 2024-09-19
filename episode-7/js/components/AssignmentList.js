import AssignmentItem from "./AssignmentItem.js";

export default {
    components: {
        AssignmentItem
    },
    template: `
        <section v-if="tasks.length">
            <h2 class="font-bold mb-2">{{ title }}</h2>
            <ul>
                <li v-for="task in tasks" :key="id">
                    <assignment-item :task="task" />
                </li>
            </ul>
        </section>
    `,
    props: {
        title: String,
        tasks: Array,
    }

}