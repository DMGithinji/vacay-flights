import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Slider from '@material-ui/core/Slider';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const filterInput = (filterItem)=> {
    if (filterItem.type === "slider"){
        return (   
            <div>            
                <Slider value={filterItem.value} onChange={filterItem.handleChange} aria-labelledby="continuous-slider" />
            </div>
        )
    } else if (filterItem.type === "radio"){
        return (
            <div>            
                
                <Select labelId="demo-customized-select-label"
                    id="demo-customized-select"
                    className='option-select'
                    value={filterItem.value}
                    name={filterItem.value}
                    onChange={filterItem.handleChange}
                    >
                    { filterItem.options.map(option => ( 
                            <MenuItem  key = {option.value} value={option.value}>{option.value}</MenuItem>
                        ))
                    }
                </Select>
            </div>                
        )
    }
};

    const FilterOption = (props) => {
        const filterItem = props.props;
        console.log('Option Props', filterItem);
        console.log('Title', filterItem.title);

        return (
                <nav className={'navigation'}>
                    <ExpansionPanel className="filter-panel" >
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                            >
                            <Typography className="filter-text">{filterItem.title}</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Typography className="w-100">
                                {filterInput(filterItem)}
                            </Typography>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </nav>
        );
    }


export default FilterOption;