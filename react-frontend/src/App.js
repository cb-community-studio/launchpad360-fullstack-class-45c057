import React, { Component } from "react";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
// import createPersistPlugin, { getPersistor } from "@rematch/persist";
// import storageSession from "redux-persist/lib/storage/session";
// import { PersistGate } from "redux-persist/es/integration/react";
import * as models from "./models";
import MyRouter from "./MyRouter/MyRouter";

class App extends Component {
    render() {
        // const persistPlugin = createPersistPlugin({
        // 	version: 2,
        // 	whitelist: ["cloud"],
        // 	blacklist: ["auth"],
        // 	storage: storageSession,
        // });
        // // generate Redux store
        // const store = init({
        // 	models,
        // 	plugins: [persistPlugin],
        // });
        const store = init({ models });

        return (
            <Provider store={store}>
                {/* <PersistGate persistor={getPersistor()}> */}
                <MyRouter />
                {/* </PersistGate> */}
            </Provider>
        );
    }
}

export default App;
