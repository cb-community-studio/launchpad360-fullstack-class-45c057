
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';
import { Avatar } from 'primereact/avatar';


const StaffDataTable = ({ items, onEditRow, onRowDelete, onRowClick }) => {
    
    const pTemplate0 = (rowData, { rowIndex }) => <p >{rowData.userId}</p>
    const pTemplate1 = (rowData, { rowIndex }) => <p >{rowData.staffName}</p>
    const tickTemplate2 = (rowData, { rowIndex }) => <i className={`pi ${rowData.isAdmin?"pi-check": "pi-times"}`}  ></i>
    const pTemplate3 = (rowData, { rowIndex }) => <p >{rowData.icNo}</p>
    const pTemplate4 = (rowData, { rowIndex }) => <p >{rowData.phoneNo}</p>
    const avatarTemplate5 = (rowData, { rowIndex }) => <Avatar image={rowData.avatarStaff}  />

    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowIndex)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    
    return (
        <DataTable value={items} onRowClick={onRowClick} scrollable rowHover paginator rows={10}>
            <Column field="userId" header="User ID" body={pTemplate0} sortable style={{ minWidth: "8rem" }} />
            <Column field="staffName" header="Staff Name" body={pTemplate1} sortable style={{ minWidth: "8rem" }} />
            <Column field="isAdmin" header="Admin?" body={tickTemplate2} sortable style={{ minWidth: "8rem" }} />
            <Column field="icNo" header="IC No." body={pTemplate3} sortable style={{ minWidth: "8rem" }} />
            <Column field="phoneNo" header="Phone No." body={pTemplate4} sortable style={{ minWidth: "8rem" }} />
            <Column field="avatarStaff" header="Profile Image" body={avatarTemplate5} style={{ minWidth: "8rem" }} />

            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
        </DataTable>
    );
};

export default StaffDataTable;