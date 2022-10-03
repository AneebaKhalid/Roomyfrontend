import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import {
    GroupingState,
    IntegratedGrouping,
} from '@devexpress/dx-react-grid';
import {
    Grid,
    Table,
    TableHeaderRow,
    TableGroupRow,
} from '@devexpress/dx-react-grid-material-ui';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { Edit, Delete } from '@mui/icons-material';
import { Link } from 'react-router-dom';


export default () => {

    const columns: GridColDef[] = [
        { name: 'officeName', title: 'Office Name' },
        { name: 'roomNum', title: 'Room' },
        { name: 'city', title: 'City' },
        { name: 'by', title: 'By' },

    ];


    const rows = [
        { roomNum: 'A1', officeName: 'Head Office', city: 'Munchen', by: 'Anna Lena' },
        { roomNum: 'G1.2', officeName: 'Head Office', city: 'Berlin', by: 'John Snow' },
        { roomNum: 'Lab', officeName: 'Head Office', city: 'Nuemberg', by: 'Jonny A' },
        { roomNum: 'A4', officeName: 'HR Department', city: 'Nuemberg', by: 'Jimmy Dow' },
        { roomNum: 'A5', officeName: 'HR Department', city: 'Nuemberg', by: 'Alina D' },
        { roomNum: 'Lab', officeName: 'Warehouse', city: 'Nuemberg', by: 'Timm F' }
    ];

    return (
        <Paper>
            <Grid
                rows={rows}
                columns={columns}
            >
                <GroupingState
                    grouping={[{ columnName: 'officeName' }]}
                />
                <IntegratedGrouping />
                <Table />
                <TableHeaderRow />
                <TableGroupRow />
            </Grid>
        </Paper>
    );
};
