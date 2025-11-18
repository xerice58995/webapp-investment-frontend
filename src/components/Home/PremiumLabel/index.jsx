export default function PremiumLabel() {
  return (
      <div style={{
          position: 'fixed',     
          top: '17px',          
          right: '130px',        

          backgroundColor: '#6e56cf', 
          color: 'white',
          padding: '8px 16px',  
          borderRadius: '8px', 
          fontSize: '0.9rem', 
          fontWeight: 'bold',
        }}>
          Log in for premium feature!

          <div style={{
            position: 'absolute',
            top: '50%',
            right: '-6px',
            marginTop: '-6px',
            borderTop: '6px solid transparent',
            borderBottom: '6px solid transparent',
            borderLeft: '6px solid #6e56cf'
          }}></div>
        </div>
  );
}