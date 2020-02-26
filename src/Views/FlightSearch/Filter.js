import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Slider from '@material-ui/core/Slider';


const Filter = (props) => {
    
    const [value, setValue] = React.useState(30);
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
    return (

        <div>
            <div className="">
            <Typography>Filter Results</Typography>            
            <ExpansionPanel className="filter-panel" >
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    className="filter-panel"
                    >
                    <Typography>Duration</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails
                    className="filter-panel">
                    <Typography className="w-100">
                    <Slider value={value} onChange={handleChange} aria-labelledby="continuous-slider" />
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel className="filter-panel" >
                <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
                >
                <Typography>No. of Stops</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                <Typography>
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
                <Typography>Duration of Stops</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                <Typography>
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
                <Typography>Baggage</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                <Typography>
                <Slider value={value} onChange={handleChange} aria-labelledby="continuous-slider" />
                </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            </div>
        </div>
    )
}


export default Filter;