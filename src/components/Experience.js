const Experience = () => {
    const experiences = [
      {
        company: "Mobilis",
        role: "Data Sampling App Developer (Intern)",
        duration: "Dec 2024",
        description: "Developed a custom data sampling application to optimize data processing and improve operational efficiency within the company’s data workflows.",
      },
      {
        company: "Safety Case Competition",
        role: "Team Member (IndusGPT)",
        duration: "Jan 2025",
        description: "Collaborated on industrial safety problem-solving and innovative solution presentation. Analyzed complex engineering scenarios and presented findings to a panel.",
      },
      {
        company: "VIC Masterclass",
        role: "Machine Learning Trainee",
        duration: "Aug 2024",
        description: "Completed a comprehensive masterclass focused on machine learning, deep learning, and computer vision. Gained hands-on experience through practical projects and algorithm development.",
      },
      
      {
        company: "VIC Club (Vision and Innovations Club)",
        role: "Active Member",
        duration: "Apr 2024 - Present",
        description: "Participated in organizing events and engaging in design and data-related activities within the club. Supported hackathon initiatives and other collaborative projects.",
      },
      {
        company: "IEC (Industrial Engineering Club)",
        role: "IT and External Relations Member",
        duration: "Dec 2024 - Present",
        description: "Contributed to IT initiatives and external communication strategies while supporting club events and technical projects.",
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