import * as React from 'react';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { Edit, Delete } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'roomNum', headerName: 'Room No.', width: 100 },
    { field: 'officeName', headerName: 'Office Name', width: 170 },
    {
        field: 'city',
        headerName: 'City',
        width: 120
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
        width: 90,
        renderCell: (param) => {
            if (param.row.status === "Booked") {
                return (
                    <div className="booked">
                        {param.row.status}
                    </div>
                );
            }
            else if (param.row.status === "Available") {
                return (
                    <div className="available">
                        {param.row.status}
                    </div>
                );
            }
        }
    },
    {
        field: 'actions',
        headerName: 'Actions',
        editable: false,
        renderCell: (param) => {
            if (param.row.status === "Available") {
                return (
                    <Link to='/home' className='sidebar__menu__icon'>
                        <span>Book</span>
                    </Link>
                );
            }

        }
    },
    {
        field: 'delete',
        headerName: '',
        editable: false,
        disableColumnMenu: true,
        renderCell: (params: GridRenderCellParams) => (
            <Delete
                onClick={() => {
                    params.api.setRowMode(params.id, 'delete');
                }}
                sx={{ cursor: 'pointer' }}
            />
        )
    }
];

const rows = [
    { id: 1, roomNum: 'A1', officeName: 'Head Office', city: 'Munchen', status: 'Booked' },
    { id: 2, roomNum: 'G1.2', officeName: 'Head Office', city: 'Berlin', status: 'Available' },
    { id: 3, roomNum: 'Lab', officeName: 'Head Office', city: 'Nuemberg', status: 'Booked' }
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

