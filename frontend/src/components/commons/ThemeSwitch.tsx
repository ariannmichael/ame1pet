import React from "react";
import ToggleButton from '@material-ui/lab/ToggleButton';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import  { useThemeContext } from '../../providers/ThemeProvider';


const ThemeSwitch: React.FC = () => {
    const { dark, toggle } = useThemeContext();

    return (
      <ToggleButton
        value="check"
        selected={dark}
        style={{ border: 'none'}}
        onChange={() => {
          toggle();
        }}
        
      >
        <div style={{ color: 'white' }}>
          { dark 
            ?
              <Brightness4Icon/>
            :
              <Brightness7Icon/>
          }
        </div>
      </ToggleButton>
    );
}

export default ThemeSwitch;