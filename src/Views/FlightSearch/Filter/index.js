import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Slider from '@material-ui/core/Slider';

// import filters from '../../../Shared/utils/filters';
// import FilterOption from './FilterOption';
// import Select from '@material-ui/core/Select';
// import MenuItem from '@material-ui/core/MenuItem';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';


const Filter = (props) => {
    
    const [value, setValue] = React.useState(30);
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
    return (

        <div className="disappear">            
            <Typography className="mb-2">Filter Options</Typography>            
            <div className="card shadow-none p-4">

            <ExpansionPanel className="filter-panel" >
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    >
                    <Typography className="filter-text">Duration</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography className="w-100">
                        <Slider value={value} onChange={handleChange} aria-labelledby="continuous-slider" />
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel className="filter-panel">
                <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
                >
                <Typography className="filter-text">No. of Stops</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                <Typography className="w-100">
                <Slider value={value} onChange={handleChange} aria-labelledby="continuous-slider" />
                </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel className="filter-panel">
                <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
                >
                <Typography className="filter-text">Duration of Stops</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                <Typography className="w-100">
                <Slider value={value} onChange={handleChange} aria-labelledby="continuous-slider" />
                </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel className="filter-panel">
                <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
                >
                <Typography className="filter-text">Baggage</Typography>
                </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <FormControl component="fieldset" className="radioStyling">
                            <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                                <FormControlLabel 
                                    className="small-text" 
                                    value="none"
                                    label="None"
                                    control={<Radio color="primary" className="small-text"  />}
                                />
                                <FormControlLabel 
                                    className="small-text" 
                                    value="Carry-on" 
                                    control={<Radio color="primary" className="small-text"  />}
                                    label="Carry-on" 
                                />
                                <FormControlLabel 
                                    className="small-text"  
                                    value="Baggage and Carry-on" 
                                    control={<Radio color="primary" className="small-text"  />}
                                    label="Baggage and Carry-on" 
                                />
                            </RadioGroup>
                        </FormControl>
            
                </ExpansionPanelDetails>
            </ExpansionPanel>
            
            </div>
        </div>
    )
}


export default Filter;