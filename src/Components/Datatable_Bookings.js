import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'roomNum', headerName: 'Room', width: 130 },
    { field: 'officeName', headerName: 'Office Name', width: 170 },
    { field: 'city', headerName: 'City', width: 120},
    { field: 'user', headerName: 'By', width: 90 },
];

const rows = [
    { id: 1, roomNum: 'A1', officeName: 'Head Office', city: 'Munchen', user: 'Anna' },
    { id: 2, roomNum: 'G1.2', officeName: 'Head Office', city: 'Berlin', user: 'John' },
    { id: 3, roomNum: 'Lab', officeName: 'Head Office', city: 'Nuemberg', user: 'Snow' }
];

export default function DataTable() {
    return (
        <div className="datatable">
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}

            />
        </div>
    );
}

