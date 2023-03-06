import React from "react";
import { render, screen } from "@testing-library/react";

import CustomerPage from "../CustomerPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders customer page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <CustomerPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("customer-datatable")).toBeInTheDocument();
    expect(screen.getByRole("customer-add-button")).toBeInTheDocument();
});
