export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6050b0a0f51df5c00386631b",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-62oyivud",
                  apiId: "ba93b242-238e-4396-9f01-b35a2baab1f3",
                },
                {
                  buildHookId: "6050b0a1da7269c8d1fad77e",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-swkkpauw",
                  apiId: "a0f958b3-61c5-48a2-bfad-6dff3f0d1023",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/Olegka28/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-swkkpauw.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
