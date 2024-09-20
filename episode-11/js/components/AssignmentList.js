import AssignmentItem from "./AssignmentItem.js";
import AssignmentTags from "./AssignmentTags.js";

export default {
    components: {
        AssignmentItem, AssignmentTags
    },
    template: `
        <section v-if="tasks.length">
            <h2 class="font-bold mb-2 flex justify-between">{{ title }} <span>({{ tasks.length }})</span></h2>
            <assignment-tags
                :initial-tags="tasks.map(i => i.tag)"
                :current-tag="currentTag"
                @change="currentTag = $event" />
            <ul class="mt-4 border border-gray-600 divide-y divide-gray-600">
                <li v-for="task in filteredTasks" :key="id">
                    <assignment-item :task="task" />
                </li>
            </ul>
        </section>
    `,
    data() {
        return {
            currentTag: 'all',
        }
    },
    props: {
        title: String,
        tasks: Array,
    },
    computed: {
        filteredTasks() {
            if (this.currentTag === 'all') {
                return this.tasks;
            }

            return this.tasks.filter(i => i.tag === this.currentTag);
        }
    }
}