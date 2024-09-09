export default {
    data() {
        return {
            processing: true,
        }
    },
    mounted() {
        // alert("Hello!");
    },
    template: `
    <button class="px-5 py-2 border rounded font-bold bg-gray-200 hover:bg-gray-100 disabled:cursor-not-allowed" :disabled="processing">
      <slot />
    </button>
    `,

}