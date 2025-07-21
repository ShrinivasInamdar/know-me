export default function Experience() {
  const experiences = [
    {
      company: "TechVerse Pvt Ltd",
      role: "Full Stack Developer Intern",
      duration: "Jan 2024 – May 2024",
      description:
        "Worked on developing REST APIs and integrating frontend features using React and Express. Improved performance by optimizing API queries.",
      techStack: "React, Node.js, Express, MongoDB",
    },
    {
      company: "Open Source Contribution",
      role: "Contributor",
      duration: "Aug 2023 – Dec 2023",
      description:
        "Contributed to multiple open-source repositories including bug fixes, feature additions, and documentation improvements.",
      techStack: "Next.js, Git, Markdown",
    },
    {
      company: "Freelance Projects",
      role: "Frontend Developer",
      duration: "Mar 2023 – Jul 2023",
      description:
        "Developed responsive UI/UX for small businesses and startups. Delivered SEO-optimized and accessible designs.",
      techStack: "HTML, Tailwind CSS, JavaScript",
    },
  ];

  return (
    <section className="bg-[#0a0e1a] text-white py-16 px-6 lg:px-20">
      <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>

      <div className="grid gap-8 md:grid-cols-2">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-[#111827] rounded-xl p-6 shadow-lg transition-transform duration-300 hover:scale-[1.02]"
          >
            <h3 className="text-xl font-semibold text-indigo-400">{exp.company}</h3>
            <p className="text-sm text-gray-400">{exp.role} • {exp.duration}</p>
            <p className="mt-3 text-gray-300">{exp.description}</p>
            <p className="mt-2 text-sm text-gray-400"><strong>Tech Stack:</strong> {exp.techStack}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
