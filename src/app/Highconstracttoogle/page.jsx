import React from 'react';
import { Button, FormControlLabel, FormGroup, Switch } from '@mui/material';
import { useHighContrast } from '../Highconstract/page';

const HighContrastToggle = () => {
    const { highContrast, setHighContrast } = useHighContrast();
    
  const handleContrastChange = (event) => {
    setHighContrast(event.target.checked);
  }
  const handelsubmit=(e)=>{
    e.preventDefault()
   window.location.assign('/Component')
  }

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'row',  
      alignItems: 'center', 
      gap: '10px',
      padding: '10px'
  }}>
      <FormGroup style={{ 
          marginRight: '20px',
          flex: 'auto' 
      }}>
          <FormControlLabel
              control={<Switch checked={highContrast} onChange={handleContrastChange} />}
              label="High Contrast"
          />
      </FormGroup>
      <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'flex-end', 
      }}>
          <Button onClick={handelsubmit}
              style={{ color: 'black'}} >
              Log In
          </Button>
          <Button
              variant="contained"
              style={{ backgroundColor: highContrast ? '#1909ad' : 'red', color: 'white'}}>
              Start free or get a demo
          </Button>
      </div>
  </div>
    
  );
}
   
export default HighContrastToggle;

