export default defineComponent({
  setup() {
    const webContent = useWebContentStore();
    return { webContent };
  },
  data: () => ({
    isScrollingDown: false, // true if scrolling down
    lastScrollY: 0, // Tracks the last scroll position
  }),
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
    toggleNavbar() {
      const element = this.$refs.navigationBar;
      if (element.getAttribute("aria-active") === "true") {
        element.setAttribute("aria-active", false);
      } else {
        element.setAttribute("aria-active", true);
      }
    },
    handleScroll() {
      if (process.client) {
        window.addEventListener("scroll", () => {
          const currentScrollY = window.scrollY;
          this.isScrollingDown = currentScrollY > this.lastScrollY;
          this.lastScrollY = currentScrollY;
          const navbar = this.$refs.navigationBar;

          if (this.isScrollingDown) {
            navbar.setAttribute("is-scrolling-down", true);
            navbar.classList.remove("is-on-top");
          } else {
            navbar.setAttribute("is-scrolling-down", false);
            if (currentScrollY === 0) {
              navbar.classList.add("is-on-top");
            }
          }
        });
      }
    },
  },
  mounted() {
    this.handleScroll();
  },
});
