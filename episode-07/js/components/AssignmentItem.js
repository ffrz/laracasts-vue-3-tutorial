export default {
    template: `
        <label>
            <input type="checkbox" v-model="task.completed" />
            {{ task.name}}
        </label>
    `,
    props: {
        task: Object
    }

}