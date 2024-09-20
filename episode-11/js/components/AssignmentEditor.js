export default {
    template: `
        <form @submit.prevent="addOrUpdate">
            <div class="border border-gray-800 text-black">
                <input ref="task" v-model="task" type="text" class="p-2" placeholder="New assignment...">
                <button type="submit" class="bg-white border-l px-4 py-2 font-bold">Add</button>
            </div>
        </form>
    `,
    data() {
        return {
            task: ''
        }
    },
    methods: {
        addOrUpdate() {
            let taskName = this.task.trim();
            if (taskName.length === 0) {
                this.$refs.task.focus();
                return;
            }
            this.$emit('addOrUpdate', this.task)
            this.task = '';
        }
    }

}