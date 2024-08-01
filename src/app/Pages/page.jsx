import React from 'react';
import HighContrastToggle from '../Highconstracttoogle/page';
import { HighContrastProvider} from '../Highconstract/page';

const MyApp=()=> {

  return (
    <>
    <HighContrastToggle/>
    </>
    
  );
}
const App = () =>(
  <HighContrastProvider>
  <MyApp/>
  </HighContrastProvider>
);


export default App;
