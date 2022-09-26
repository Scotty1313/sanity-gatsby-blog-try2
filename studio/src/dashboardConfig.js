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
                    "63318e930c448617516187e9",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-try-2-studio",
                  apiId: "775d4dad-cd88-4cd1-8bc7-7c129265fb20",
                },
                {
                  buildHookId: "63318e932a8868008692b62f",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-try-2",
                  apiId: "486b7a7d-e300-4c41-be00-c654c8b76922",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/Scotty1313/sanity-gatsby-blog-try2",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-try-2.netlify.app",
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
