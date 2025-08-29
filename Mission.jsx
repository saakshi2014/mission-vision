const Mission = () => {
  return (
   <div className="page-bg min-h-screen p-4 md:p-8">
  <div className="max-w-4xl mx-auto">
    <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-md p-8">
        <h1 className="text-4xl font-bold text-blue-800 mb-6 text-center">
          Our Mission
        </h1>
        
        <div className="space-y-6">
          <p className="text-gray-700 leading-relaxed text-lg">
            <ol className="list-disc list-inside space-y-1">
          <li>To provide students with quality education using innovative and humane methods of teaching and learning</li>
          <li>To develop in them competence for employment as well as entrepreneurship, to promote their power of thinking and creative ability</li>
          </ol>
          
          </p>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              Mission Statement
            </h3>
            <p className="text-blue-700 italic leading-relaxed text-lg">
              The vision of our founder Dr. T.M.A. Pai was "to take education to the doorsteps of the people in and around Udupi." The lamp lit by him has lit hundreds of lamps.
             The college believes in words of the Mahatma after whom the college is named- "The end of all knowledge must
              be building up of character"
            </p>
          </div>
          
          <p className="text-gray-700 leading-relaxed text-lg">
            <ol className="list-disc list-inside space-y-1">
            <li>To organize activities that will contribute to the understanding of their responsibilities to the family the society and the nation</li>
          <li>To promote national integration through cordial relationship between and among stake holders</li>
          </ol>
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">
                Academic Excellence
              </h4>
              <p className="text-gray-600 leading-relaxed">
                We strive for the highest standards in teaching, learning, and research, 
                ensuring our students receive a world-class education.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">
                Student Development
              </h4>
              <p className="text-gray-600 leading-relaxed">
                We are committed to nurturing well-rounded individuals who are prepared 
                for leadership roles in their chosen fields.
              </p>
            </div>
          </div>
          
         </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
