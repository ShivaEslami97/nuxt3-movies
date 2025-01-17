// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@pinia/nuxt"],
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  imports: {
    dirs: ["types/*.ts", "store/*.ts", "types/**/*.ts"],
  },
});
