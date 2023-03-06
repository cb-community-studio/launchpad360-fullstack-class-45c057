
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import client from "../../services/restClient";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from 'primereact/inputtext';
import { Checkbox } from 'primereact/checkbox';
import { Calendar } from 'primereact/calendar';


 
const getSchemaValidationErrorsStrings = (errorObj) => {
    let errMsg = [];
    for (const key in errorObj.errors) {
        if (Object.hasOwnProperty.call(errorObj.errors, key)) {
            const element = errorObj.errors[key];
            if (element?.message) {
                errMsg.push(element.message);
            }
        }
    }
    return errMsg.length ? errMsg : errorObj.message ? errorObj.message : null;
};

const CustomerCreateDialogComponent = (props) => {
    const [_entity, set_entity] = useState({});
    const [error, setError] = useState("");

    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        set_entity({})
    },[props.show])
    const onSave = async () => {
        let _data = {
            userId: _entity.userId,
            custName: _entity.custName,
            isMember: _entity.isMember,
            createdDate: _entity.createdDate,
            phoneNo: _entity.phoneNo,
            icNo: _entity.icNo,
            avatarCust: _entity.avatarCust

        };

        setLoading(true);
        try {
            const result = await client.service("customer").create(_data);
            props.onHide();
            props.alert({ type: "success", title: "Create", message: "Created successfully" });
            props.onCreateResult(result);
        } catch (error) {
            console.log("error", error);
            setError(getSchemaValidationErrorsStrings(error) || "Failed to create");
            props.alert({ type: "error", title: "Create", message: "Failed to create" });
        }
        setLoading(false);
    };

    const renderFooter = () => (
        <div className="flex justify-content-end">
            <Button label="save" className="p-button-text no-focus-effect" onClick={onSave} loading={loading} />
            <Button label="close" className="p-button-text no-focus-effect p-button-secondary" onClick={props.onHide} />
        </div>
    );

    const setValByKey = (key, val) => {
        let new_entity = { ..._entity, [key]: val };
        set_entity(new_entity);
        setError("");
    };

    return (
        <Dialog header="Create" visible={props.show} closable={false} onHide={props.onHide} modal style={{ width: "40vw" }} className="min-w-max" footer={renderFooter()} resizable={false}>
            <div role="customer-create-dialog-component">
                <div>
                    <p className="m-0" >User ID:</p>
                    <InputText className="w-full mb-3" value={_entity?.userId} onChange={(e) => setValByKey("userId", e.target.value)}  />
                </div>
                <div>
                    <p className="m-0" >Customer Name:</p>
                    <InputText className="w-full mb-3" value={_entity?.custName} onChange={(e) => setValByKey("custName", e.target.value)}  />
                </div>
                <div>
                    <p className="m-0" >Member:</p>
                    <Checkbox checked={_entity?.isMember} onChange={ (e) => setValByKey("isMember", e.checked)}  ></Checkbox>
                </div>
                <div>
                    <p className="m-0" >Created Date:</p>
                    <Calendar dateFormat="dd/mm/yy hh:mm" placeholder={"dd/mm/yy hh:mm"} value={_entity?.createdDate} onChange={ (e) => setValByKey("createdDate", e.target.value)} showTime ></Calendar>
                </div>
                <div>
                    <p className="m-0" >Phone No.:</p>
                    <Checkbox checked={_entity?.phoneNo} onChange={ (e) => setValByKey("phoneNo", e.checked)}  ></Checkbox>
                </div>
                <div>
                    <p className="m-0" >IC No.:</p>
                    <InputText className="w-full mb-3" value={_entity?.icNo} onChange={(e) => setValByKey("icNo", e.target.value)}  />
                </div>
                <div>
                    <p className="m-0" >Profile Image:</p>
                    <InputText className="w-full mb-3" value={_entity?.avatarCust} onChange={(e) => setValByKey("avatarCust", e.target.value)}  />
                </div>


                <small className="p-error">
                    {Array.isArray(error)
                        ? error.map((e, i) => (
                              <p className="m-0" key={i}>
                                  {e}
                              </p>
                          ))
                        : error}
                </small>
            </div>
        </Dialog>
    );
};

const mapState = (state) => {
    //
};
const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data),
});

export default connect(null, mapDispatch)(CustomerCreateDialogComponent);
// createDialog_code.template
