const Objectives = () => {
  const objectives = [
    {
      id: 1,
      title: "Character building",
      description: "To foster the holistic development of:",
      details: [
        "Instilling a deep sense of integrity and ethical responsibility.",
        "Cultivating empathy and a commitment to community service and engagement",
        "Building resilience, discipline, and the ability to navigate personal and professional challenges with conviction"
      ]
    },
    {
      id: 2,
      title: "Excellence in teaching-learning",
      description: "To ensure the highest standards of excellence in teaching and learning by:",
      details: [
        "Adopting a student-centric approach that emphasizes practical, project-based learning.", 
        "Investing in the continuous professional development of our faculty.",
        "Regularly updating our curriculum to align with industry needs and global trends." ,
        "Integrating modern technology to create an engaging and effective learning environment."
        
      ]
    },
    {
      id: 3,
      title: "Building competence for employability/entrepreneurship",
      description: "To enhance student competence for career success by:",
      details: [
        "Providing targeted skill-development programs based on current industry demands.",
        "Facilitating mandatory internships and live projects for practical, real-world experience.",
        "Strengthening the industry-institute interface through guest lectures, workshops, and collaborations.",
        "Nurturing entrepreneurial talent through a dedicated E-Cell and incubation support."
      ]
    },
    // {
    //   id: 4,
    //   title: "Community Engagement",
    //   description: "To actively contribute to the betterment of society through community service and outreach programs.",
    //   details: [
    //     "Organize community service initiatives",
    //     "Partner with local organizations",
    //     "Promote social responsibility"
    //   ]
    // },
    // {
    //   id: 5,
    //   title: "Global Perspective",
    //   description: "To prepare students for a globalized world through international partnerships and cultural exchange programs.",
    //   details: [
    //     "Establish international collaborations",
    //     "Offer study abroad opportunities",
    //     "Promote cultural diversity"
    //   ]
    // }
  ];

  return (
    <div className="page-bg min-h-screen p-4 md:p-8">
     <div className="max-w-4xl mx-auto">
      <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-md p-8">
        <h1 className="text-4xl font-bold text-blue-800 mb-6 text-center">
          Our Objectives
        </h1>
        
        <div className="space-y-6">
          <p className="text-gray-700 leading-relaxed text-lg text-center">
            provide quality education through innovative methods, 
            develop student competence for employment and entrepreneurship, 
            foster thinking and creative ability, organize activities for social responsibility,
             and promote national integration
          </p>
          
          <div className="space-y-6">
            {objectives.map((objective) => (
              <div key={objective.id} className="bg-gray-50 rounded-lg p-6 border-l-4 border-blue-500">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {objective.id}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {objective.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {objective.description}
                    </p>
                    <ul className="space-y-2">
                      {objective.details.map((detail, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <span className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              Commitment to Excellence
            </h3>
            <p className="text-blue-700 leading-relaxed text-lg">
              These objectives guide our daily operations and strategic planning. We are committed 
              to achieving each goal while maintaining the highest standards of quality and integrity 
              in everything we do.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Objectives;
