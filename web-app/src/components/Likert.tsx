import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { classification } from '../utils/data';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const rows = ['Taste', 'Color', 'Appearance'];

const Likert = ({ setReview }: any) => {
    const classes = useStyles();
    const cells = [1,2];

    const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setReview(event.target.name, event.target.value)
    }

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        {classification.map((item: string, index: number) => (
                            <TableCell align="center" key={index}>{item}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row}>
                            <TableCell component="th" scope="row">
                                {row}
                            </TableCell>
                            <TableCell align="center"><input type="radio" value="0" name={row} onChange={(event) => handleOptionChange(event)} /></TableCell>
                            <TableCell align="center"><input type="radio" value="1" name={row} onChange={(event) => handleOptionChange(event)} /></TableCell>
                            <TableCell align="center"><input type="radio" value="2" name={row} onChange={(event) => handleOptionChange(event)} defaultChecked/></TableCell>
                            <TableCell align="center"><input type="radio" value="3" name={row} onChange={(event) => handleOptionChange(event)} /></TableCell>
                            <TableCell align="center"><input type="radio" value="4" name={row} onChange={(event) => handleOptionChange(event)} /></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default Likert;
