import React, { Component } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


class OptionSelect extends Component{

    handleSelect = (event) => {
        this.props.handleSelect(event)
    }

    render() {
        return (
            <div>
                <FormControl className='mr-4'>
                    <Select labelId="demo-customized-select-label"
                            id="demo-customized-select"
                            className='option-select'
                            value={this.props.value}
                            name={this.props.name}
                            onChange={this.handleSelect}
                            >
                            { this.props.options.map(option => ( 
                                    <MenuItem  key = {option.value} value={option.value}>{option.displayValue}</MenuItem>
                                ))
                            }
                    </Select>
                </FormControl>
            </div>
        )
    }



}

export default OptionSelect;