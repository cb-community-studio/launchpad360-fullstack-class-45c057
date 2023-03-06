import React from "react";
import { render, screen } from "@testing-library/react";

import BookPage from "../BookPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders book page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <BookPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("book-datatable")).toBeInTheDocument();
    expect(screen.getByRole("book-add-button")).toBeInTheDocument();
});
