import React from "react";
import { render, screen } from "@testing-library/react";

import ShoppingcartPage from "../ShoppingcartPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders shoppingcart page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <ShoppingcartPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("shoppingcart-datatable")).toBeInTheDocument();
    expect(screen.getByRole("shoppingcart-add-button")).toBeInTheDocument();
});
