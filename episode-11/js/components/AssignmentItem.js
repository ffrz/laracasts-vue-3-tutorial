export default {
    template: `
        <div class="px-4 py-2">
            <label class="flex items-center">
                <input type="checkbox" v-model="task.completed"/>
                <span class="ml-2">{{ task.name}}</span>
            </label>
        </div>
    `,
    props: {
        task: Object
    }

}