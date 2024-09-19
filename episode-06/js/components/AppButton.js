export default {
    data() {
        return {
        }
    },
    props: {
        type: {
            type: String,
            default: 'default',
        },
        processing: {
            type: Boolean,
            default: false,
        }
    },
    mounted() {
        // alert("Hello!");
    },
    template: `
    <button :class="{
        'px-5 py-2 border rounded font-bold disabled:cursor-not-allowed': true,
        'text-slate-50 bg-blue-600 hover:bg-blue-500': type === 'primary',
        'text-slate-50 bg-violet-700 hover:bg-violet-600': type === 'secondary',
        'bg-gray-200 hover:bg-gray-100': type === 'default',
        'is-loading': processing,
    }" :disabled="processing">
      <slot />
    </button>
    `,

}