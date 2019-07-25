import React from 'react';
import axios from 'axios';
import C3 from 'c3'
import 'c3/c3.css'

import { withStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const styles = {
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: 8,
    },
    title: {
        flexGrow: 1,
    },
    select: {
        width: 130,
        color: '#ffffff',
        '&:before': {
            borderColor: '#ffffff',
        },
        '&:after': {
            borderColor: '#ffffff',
        }
    },
    icon: {
        fill: '#ffffff',
    },
};


class Layout extends React.Component {
    state = {
        filterType: "day",
        dates: [],
        handValues: []
    }
    handleChange = (e) => {
        this.setState({
            filterType: e.target.value
        }, () => {
            this.getInventory()
        })
    }
    componentDidMount() {
        this.getInventory()
    }
    renderChart() {
        const { dates, handValues } = this.state
        C3.generate({
            bindto: "#chart1",
            size: {
                height: 550,
            },
            data: {
                x: 'x',
                columns: [
                    ['x', ...dates],
                    ['On Hand values', ...handValues]
                ],
                type: 'bar',
            },
            axis: {
                x: {
                    type: 'category',
                    categories: dates,
                    tick: {
                        rotate: 75,
                        multiline: false
                    },
                    height: 80
                }
            }
        });
    }

    getInventory = () => {
        const { filterType } = this.state
        axios.get(`http://localhost:9090/api/inventory/${filterType}`).then((res) => {
            let dates = []
            let handValues = []
            res.data.forEach((value) => {
                if (filterType === 'day') {
                    dates.push(value.date)
                } else {
                    dates.push("week - " + value.weekly)
                }
                handValues.push(parseFloat(value.on_hand_value))
            })
            this.setState({
                dates,
                handValues
            }, () => {
                this.renderChart()
            })
        })
    }

    render() {
        const { classes } = this.props;
        const { filterType } = this.state
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            Daily Inventory
                        </Typography>
                        <span>
                        Filter By : &nbsp; 
                        </span>
                        <Select
                            value={filterType}
                            onChange={this.handleChange}
                            inputProps={{
                                name: 'filter-type',
                                id: 'filter-type',
                                classes: {
                                    icon: classes.icon,
                                },
                            }}
                            className={classes.select}
                        >
                            <MenuItem value="day">Day</MenuItem>
                            <MenuItem value="week">Week</MenuItem>
                        </Select>
                    </Toolbar>
                </AppBar>
                <br />
                <div id="chart1"></div>
            </div>
        )
    }
}

export default withStyles(styles)(Layout)