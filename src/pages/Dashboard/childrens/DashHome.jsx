const DashHome = () => {
  const templates = [
    {
      name: "Blog Generator",
      desc: "Generate SEO-optimized blog posts with AI.",
      icon: "fa-solid fa-blog",
      tag: "blog",
    },
    {
      name: "Resume Builder",
      desc: "Create a modern, professional resume in minutes.",
      icon: "fa-solid fa-file-alt",
      tag: "resume",
    },
    {
      name: "Portfolio Builder",
      desc: "Showcase your skills with a personalized portfolio.",
      icon: "fa-solid fa-folder-open",
      tag: "portfolio",
    },
    {
      name: "Website Builder",
      desc: "Launch your personal or business website effortlessly.",
      icon: "fa-solid fa-globe",
      tag: "website",
    },
    {
      name: "E-Commerce Builder",
      desc: "Design an online store and start selling instantly.",
      icon: "fa-solid fa-cart-shopping",
      tag: "ecommerce",
    },
    {
      name: "Social Media Post Generator",
      desc: "Create eye-catching social media content quickly.",
      icon: "fa-solid fa-hashtag",
      tag: "social",
    },
    {
      name: "Landing Page Builder",
      desc: "Craft beautiful landing pages for campaigns.",
      icon: "fa-solid fa-rocket",
      tag: "landing-page",
    },
    {
      name: "Newsletter Creator",
      desc: "Design engaging newsletters to grow your audience.",
      icon: "fa-solid fa-envelope-open-text",
      tag: "newsletter",
    },
    {
      name: "Marketing Email Generator",
      desc: "Generate personalized marketing emails effortlessly.",
      icon: "fa-solid fa-paper-plane",
      tag: "email",
    },
    {
      name: "SEO Report Generator",
      desc: "Analyze your site and generate SEO reports.",
      icon: "fa-solid fa-chart-line",
      tag: "seo",
    },
    {
      name: "Content Calendar Planner",
      desc: "Plan and organize your content schedule.",
      icon: "fa-solid fa-calendar-alt",
      tag: "calendar",
    },
    {
      name: "Chatbot Builder",
      desc: "Create an AI-powered chatbot for your website.",
      icon: "fa-solid fa-comments",
      tag: "chatbot",
    }
  ];

  return (
    <>
      <div className="home-container m-1">
        <div className="tab h-72 w-full p-4 flex flex-col items-center justify-center gap-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          <h2 className="text-2xl font-semibold text-white">Hey, Anupam 🙂</h2>
          <input
            className="border border-gray-300 w-full max-w-md h-12 pl-4 pr-3 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 hover:shadow-lg bg-white"
            placeholder="Search..."
          />
        </div>
      </div>
      <div className="templates-container m-5 mt-5 h-screen">
        <h2 className="text-2xl mt-5 text-center mb-6">Templates</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {templates.map((template, index) => (
            <div
              key={index}
              className="template-card p-6 bg-white rounded-lg shadow-md flex flex-col items-center justify-center gap-2 transition-transform transform hover:scale-105"
            >
              <i className={`text-5xl text-indigo-500 ${template.icon}`}></i>
              <h3 className="text-lg font-semibold">{template.name}</h3>
              <p className="text-sm text-gray-500 text-center">{template.desc}</p>
              <button className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition-colors duration-300">
                Create
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DashHome;
