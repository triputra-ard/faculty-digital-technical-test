export default defineComponent({
  setup() {
    const webContent = useWebContentStore();
    return { webContent };
  },
  computed: {},
  methods: {
    showDropdown(value: object) {
      const element = value;
      const allElement = document.querySelectorAll(".dropdown-menu");
      allElement.forEach((e) => {
        e.setAttribute("aria-open", false);
      });
      element.setAttribute("aria-open", true);
    },
    hideDropdown(value: object) {
      const element = value;
      element.setAttribute("aria-open", false);
    },
  },
  mounted() {
    console.log("Component mounted");
  },
});
