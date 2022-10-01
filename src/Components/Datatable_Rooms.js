import * as React from 'react';
import { DataGrid, Cell } from '@mui/x-data-grid';
import { CellRendererSelectorFunc, ICellRenderer } from 'ag-grid-community';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'roomNum', headerName: 'Room Number', width: 130 },
    { field: 'officeName', headerName: 'Office Name', width: 170 },
    {
        field: 'city',
        headerName: 'City',
        width: 120,
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (params) =>
            `${params.row.officeName || ''} ${params.row.city || ''}`,

    },
    {
        field: 'status',
        headerName: 'Status',
        width: 90
    },
];

const rows = [
    { id: 1, roomNum: 'A1', officeName: 'Head Office', city: 'Munchen', status: 'Booked' },
    { id: 2, roomNum: 'G1.2', officeName: 'Head Office', city: 'Berlin', status: 'Available' },
    { id: 3, roomNum: 'Lab', officeName: 'Head Office', city: 'Nuemberg', status: 'Booked' }
];

export default function DataTable() {
    const ActionColumn = [
        {
            field: '',
            headerName: '',
            width: 100,
            ICellRenderer
        }
    ];
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

