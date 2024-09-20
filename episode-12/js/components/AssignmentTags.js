export default {
    template: `
        <div class="flex gap-2">
            <button
                v-for="tag in tags"
                @click="$emit('update:currentTag', tag)"
                class="border rounded py-px px-1 text-xs"
                :class="{
                    'border-blue-500 text-blue-500': currentTag === tag
                }">
                {{ tag }}
            </button>
        </div>
    `,
    props: {
        initialTags: Array,
        currentTag: String,
    },
    computed: {
        tags() {
            return ['all', ...new Set(this.initialTags)];
        }
    }
}