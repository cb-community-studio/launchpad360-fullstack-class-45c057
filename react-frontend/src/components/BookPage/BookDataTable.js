
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';


const BookDataTable = ({ items, onEditRow, onRowDelete, onRowClick }) => {
    
    const pTemplate0 = (rowData, { rowIndex }) => <p >{rowData.ibsn}</p>
    const pTemplate1 = (rowData, { rowIndex }) => <p >{rowData.title}</p>
    const pTemplate3 = (rowData, { rowIndex }) => <p >{rowData.price}</p>
    const pTemplate4 = (rowData, { rowIndex }) => <p >{rowData.author}</p>
    const pTemplate5 = (rowData, { rowIndex }) => <p >{rowData.publisher}</p>
    const inputTemplate6 = (rowData, { rowIndex }) => <InputText value={rowData.stock}  />

    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowIndex)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    
    return (
        <DataTable value={items} onRowClick={onRowClick} scrollable rowHover paginator rows={10}>
            <Column field="ibsn" header="IBSN" body={pTemplate0} sortable style={{ minWidth: "8rem" }} />
            <Column field="title" header="Title" body={pTemplate1} sortable style={{ minWidth: "8rem" }} />
            <Column field="genre" header="genre"  style={{ minWidth: "8rem" }} />
            <Column field="price" header="Price" body={pTemplate3} sortable style={{ minWidth: "8rem" }} />
            <Column field="author" header="Author" body={pTemplate4} sortable style={{ minWidth: "8rem" }} />
            <Column field="publisher" header="Publisher" body={pTemplate5} sortable style={{ minWidth: "8rem" }} />
            <Column field="stock" header="Stock" body={inputTemplate6} sortable style={{ minWidth: "8rem" }} />

            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
        </DataTable>
    );
};

export default BookDataTable;