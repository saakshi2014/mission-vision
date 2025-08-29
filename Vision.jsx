const Vision = () => {
  console.log('Vision component is rendering!');
  
  return (
  <div className="page-bg min-h-screen p-4 md:p-8">
   <div className="max-w-4xl mx-auto">
    <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-md p-8">
        <h1 style={{ fontSize: '36px', fontWeight: 'bold', color: '#1e40af', marginBottom: '24px', textAlign: 'center' }}>
          Our Vision
        </h1>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <p style={{ color: '#374151', lineHeight: '1.6', fontSize: '18px' }}>
            <ol className="list-disc list-inside space-y-1">
          <li>Endowed with the spirit of enquiry</li>
          <li>Eager to acquire knowledge and skills</li>
          <li>Competent to be employed in his/her field</li>
          
          </ol>
          </p>
          
         
          
          <div style={{ backgroundColor: '#eff6ff', borderLeft: '4px solid #3b82f6', padding: '24px', borderRadius: '0 8px 8px 0' }}>
            <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#1e40af', marginBottom: '12px' }}>
              Vision Statement
            </h3>
            <p style={{ color: '#1d4ed8', fontStyle: 'italic', lineHeight: '1.6', fontSize: '18px' }}>
              "To be the leading institution of higher learning, fostering innovation, 
              excellence, and global citizenship while preparing students for the challenges 
              of tomorrow."
            </p>
          </div>
          
          <p style={{ color: '#374151', lineHeight: '1.6', fontSize: '18px' }}>
            <ol className="list-disc list-inside space-y-1">
            <li>Possessing qualities of leadership, responsible to family, society and nation</li>
          <li>Capable of appreciating aesthetics and understanding our cultural heritage and rational and humane in attitude</li>
          </ol>
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Vision;
