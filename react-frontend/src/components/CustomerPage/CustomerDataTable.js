
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import { Avatar } from 'primereact/avatar';


const CustomerDataTable = ({ items, onEditRow, onRowDelete, onRowClick }) => {
    
    const pTemplate0 = (rowData, { rowIndex }) => <p >{rowData.userId}</p>
    const pTemplate1 = (rowData, { rowIndex }) => <p >{rowData.custName}</p>
    const tickTemplate2 = (rowData, { rowIndex }) => <i className={`pi ${rowData.isMember?"pi-check": "pi-times"}`}  ></i>
    const calendarTemplate3 = (rowData, { rowIndex }) => <Calendar className="w-20rem" dateFormat="dd/mm/yy" placeholder={"dd/mm/yy"} value={new Date(rowData.createdDate)} showTime ></Calendar>
    const pTemplate4 = (rowData, { rowIndex }) => <p >{rowData.phoneNo}</p>
    const pTemplate5 = (rowData, { rowIndex }) => <p >{rowData.icNo}</p>
    const avatarTemplate6 = (rowData, { rowIndex }) => <Avatar image={rowData.avatarCust}  />

    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowIndex)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    
    return (
        <DataTable value={items} onRowClick={onRowClick} scrollable rowHover paginator rows={10}>
            <Column field="userId" header="User ID" body={pTemplate0} sortable style={{ minWidth: "8rem" }} />
            <Column field="custName" header="Customer Name" body={pTemplate1} sortable style={{ minWidth: "8rem" }} />
            <Column field="isMember" header="Member" body={tickTemplate2} sortable style={{ minWidth: "8rem" }} />
            <Column field="createdDate" header="Created Date" body={calendarTemplate3} sortable style={{ minWidth: "8rem" }} />
            <Column field="phoneNo" header="Phone No." body={pTemplate4} sortable style={{ minWidth: "8rem" }} />
            <Column field="icNo" header="IC No." body={pTemplate5} sortable style={{ minWidth: "8rem" }} />
            <Column field="avatarCust" header="Profile Image" body={avatarTemplate6} style={{ minWidth: "8rem" }} />

            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
        </DataTable>
    );
};

export default CustomerDataTable;