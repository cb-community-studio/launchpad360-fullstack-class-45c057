import React from "react";
import { render, screen } from "@testing-library/react";

import StaffPage from "../StaffPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders staff page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <StaffPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("staff-datatable")).toBeInTheDocument();
    expect(screen.getByRole("staff-add-button")).toBeInTheDocument();
});
