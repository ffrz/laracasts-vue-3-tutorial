import AssignmentItem from "./AssignmentItem.js";
import AssignmentTags from "./AssignmentTags.js";

export default {
  components: {
    AssignmentItem, AssignmentTags
  },
  template: `
    <section v-if="tasks.length && show" class="w-60">
        <div class="flex justify-between items-start">
            <h2 class="font-bold mb-2 flex">
                {{ title }}
                <span>({{ tasks.length }})</span>
            </h2>
            <button v-show="closable" @click="$emit('closeRequested')">&times;</button>
        </div>
        <assignment-tags
            :initial-tags="tasks.map(i => i.tag)"
            v-model:current-tag="currentTag" />
        <ul class="mt-4 mb-4 border border-gray-600 divide-y divide-gray-600">
            <li v-for="task in filteredTasks" :key="id">
                <assignment-item :task="task" />
            </li>
        </ul>
        <slot></slot>
    </section>
    `,
  data() {
    return {
      currentTag: 'all',
      show: true,
    }
  },
  props: {
    title: String,
    tasks: Array,
    closable: Boolean,
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