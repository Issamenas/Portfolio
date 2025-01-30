const Experience = () => {
    const experiences = [
      {
        company: "",
        role: "Frontend Developer",
        duration: "Jan 2022 - Present",
        description: "Worked on building responsive UI with React and Tailwind CSS.",
      },
      {
        company: "Company B",
        role: "Web Developer Intern",
        duration: "June 2021 - Dec 2021",
        description: "Developed landing pages and optimized website performance.",
      },
    ];
  
    return (
      <section id="experience" className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-10">
            Experience
          </h2>
  
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white shadow-md p-6 rounded-lg border-l-4 border-blue-600"
              >
                <h3 className="text-xl font-semibold text-gray-800">
                  {exp.role} at {exp.company}
                </h3>
                <p className="text-sm text-gray-500">{exp.duration}</p>
                <p className="mt-2 text-gray-700">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Experience;