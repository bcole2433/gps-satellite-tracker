import React from 'react';
import { 
    Table, TableBody,
    TableCell, TableHead, TableRow
} from '@material-ui/core';


const SatInfo = ({ satellite }) => {
    const row1 = 'ID';
    const rows = ['Name', 'Latitude', 'Longitude', 'Azimuth', 'Elevation', 'Right Ascension', 'Decline'];
    return (
        <div className='card'>
            <Table className='cardTable'>
                <TableHead>
                    <TableRow variant='head'>
                        <TableCell align='left'>{row1}</TableCell>
                        {rows.map((row, index) => (
                            <TableCell align='right' key={index}>{row}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell align='left'>{satellite.satID}</TableCell>
                        <TableCell align='right'>{satellite.satName}</TableCell>
                        <TableCell align='right'>{satellite.satLat}</TableCell>
                        <TableCell align='right'>{satellite.satLng}</TableCell>
                        <TableCell align='right'>{satellite.azimuth}</TableCell>
                        <TableCell align='right'>{satellite.elevation}</TableCell>
                        <TableCell align='right'>{satellite.ra}</TableCell>
                        <TableCell align='right'>{satellite.dec}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    )
}

export default SatInfo;
