const DashHome = () => {
  let templates = [
    {
      name: "Blog Generator",
      desc: "Generate a blog post with a click of a button",
      icon: "fa-solid fa-blog",
      tag: "blog",
    },
    {
      name: "Resume Builder",
      desc: "Create a professional resume in minutes",
      icon: "fa-solid fa-file",
      tag: "resume",
    },
    {
      name: "Portfolio Builder",
      desc: "Create a professional portfolio in minutes",
      icon: "fa-solid fa-folder",
      tag: "portfolio",
    },
    {
      name: "Website Builder",
      desc: "Create a professional website in minutes",
      icon: "fa-solid fa-globe",
      tag: "website",
    },
    {
      name: "E-Commerce Builder",
      desc: "Create a professional e-commerce website in minutes",
      icon: "fa-solid fa-cart-shopping",
      tag: "ecommerce",
    },
  ];

  return (
    <>
      <div className="home-container m-1">
        <div className="tab h-72 w-full p-4 flex flex-col items-center justify-center gap-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          <h2 className="text-2xl font-semibold text-white">Hey, Anupam 🙂</h2>

          {/* Input Search Bar */}
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
              <i className={`fas text-5xl text-indigo-500 ${template.icon}`}></i>
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
