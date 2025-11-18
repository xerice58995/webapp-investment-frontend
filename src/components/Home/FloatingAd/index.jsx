export default function FloatingAd() {
  return (
      // 新增廣告區域
      <div style={{
        position: 'fixed',    
        bottom: '50px',       
        left: '35%',        
        padding: '50px 150px', 
        backgroundColor: 'black', 
        color: 'red',    
        fontSize: '24px',  
        fontWeight: 'bold'
      }}>
        Test Advertisement <br />
        Login to remove ads
      </div>
  );
}