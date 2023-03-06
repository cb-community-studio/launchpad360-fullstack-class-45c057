
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import client from "../../services/restClient";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from 'primereact/inputtext';
import { Checkbox } from 'primereact/checkbox';


 
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

const StaffCreateDialogComponent = (props) => {
    const [_entity, set_entity] = useState({});
    const [error, setError] = useState("");

    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        set_entity({})
    },[props.show])
    const onSave = async () => {
        let _data = {
            userId: _entity.userId,
            staffName: _entity.staffName,
            isAdmin: _entity.isAdmin,
            icNo: _entity.icNo,
            phoneNo: _entity.phoneNo,
            avatarStaff: _entity.avatarStaff

        };

        setLoading(true);
        try {
            const result = await client.service("staff").create(_data);
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
            <div role="staff-create-dialog-component">
                <div>
                    <p className="m-0" >User ID:</p>
                    <InputText className="w-full mb-3" value={_entity?.userId} onChange={(e) => setValByKey("userId", e.target.value)}  />
                </div>
                <div>
                    <p className="m-0" >Staff Name:</p>
                    <InputText className="w-full mb-3" value={_entity?.staffName} onChange={(e) => setValByKey("staffName", e.target.value)}  />
                </div>
                <div>
                    <p className="m-0" >Admin?:</p>
                    <Checkbox checked={_entity?.isAdmin} onChange={ (e) => setValByKey("isAdmin", e.checked)}  ></Checkbox>
                </div>
                <div>
                    <p className="m-0" >IC No.:</p>
                    <InputText className="w-full mb-3" value={_entity?.icNo} onChange={(e) => setValByKey("icNo", e.target.value)}  />
                </div>
                <div>
                    <p className="m-0" >Phone No.:</p>
                    <InputText className="w-full mb-3" value={_entity?.phoneNo} onChange={(e) => setValByKey("phoneNo", e.target.value)}  />
                </div>
                <div>
                    <p className="m-0" >Profile Image:</p>
                    <InputText className="w-full mb-3" value={_entity?.avatarStaff} onChange={(e) => setValByKey("avatarStaff", e.target.value)}  />
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

export default connect(null, mapDispatch)(StaffCreateDialogComponent);
// createDialog_code.template
