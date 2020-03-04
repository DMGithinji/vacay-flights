import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';


const BootstrapInput = withStyles(theme => ({
    root: {
        'label + &': {
        marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        height: '18px',
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
        fontFamily: [
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
        '&:hover': {
            borderRadius: 4,
            borderColor: '#000',
        },
    },
}))(InputBase);

// const useStyles = makeStyles(theme => ({
//     margin: {
//         margin: theme.spacing(1),
//     },
// }));

class CustomSelect extends Component{

    handleSelect = (event) => {
        this.props.handleSelect(event)
    }

    render() {
        return (
            <div>
                <FormControl className="col-12">
                    {/* <InputLabel id="title-label">{this.props.label}</InputLabel> */}
                    <Select labelId="demo-customized-select-label"
                            id="demo-customized-select"
                            className='option-select'
                            value={this.props.value}
                            name={this.props.name}
                            label={this.props.label}
                            style={{ height: '40px' }}                            // error={Boolean(this.props.errors[{this.props.name}])}
                            fullWidth
                            onChange={this.handleSelect}                        
                            input={<BootstrapInput />}
                            >
                            <MenuItem value="" disabled>
                                {this.props.placeholder}
                            </MenuItem>
                            { this.props.options.map(option => ( 
                                    <MenuItem  key = {option.value} value={option.value}>{option.name}</MenuItem>
                                ))
                            }
                    </Select>
                </FormControl>
            </div>
        )
    }



}

export default CustomSelect;