import AssignmentItem from "./AssignmentItem.js";

export default {
    components: {
        AssignmentItem
    },
    template: `
        <section v-if="tasks.length">
            <h2 class="font-bold mb-2 flex justify-between">{{ title }} <span>({{ tasks.length }})</span></h2>
            <div class="flex gap-2">
                <button
                    v-for="tag in tags"
                    @click="this.currentTag = tag"
                    class="border rounded py-px px-1 text-xs"
                    :class="{
                        'border-blue-500 text-blue-500': this.currentTag === tag
                    }">
                    {{ tag }}
                </button>
            </div>
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
        },
        tags() {
            // return this.tasks.map(i => i.tag);

            return ['all', ...new Set(this.tasks.map(i => i.tag))];
        }
    }
}