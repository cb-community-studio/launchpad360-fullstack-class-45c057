import React from "react";
import { render, screen } from "@testing-library/react";

import ShoppingcartCreateDialogComponent from "../ShoppingcartCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders shoppingcart create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <ShoppingcartCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("shoppingcart-create-dialog-component")).toBeInTheDocument();
});
