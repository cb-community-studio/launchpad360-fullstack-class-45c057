import React from "react";
import { render, screen } from "@testing-library/react";

import ShoppingcartEditDialogComponent from "../ShoppingcartEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders shoppingcart edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <ShoppingcartEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("shoppingcart-edit-dialog-component")).toBeInTheDocument();
});
