import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import NavigationBar from "../NavigationBar";
import Home from "../../pages/Home";
import { InvoicePrinter } from "../../pages/InvoicePrinter";
import ListPharmacy from "../../pages/Pharmacy/ListPharmacy";
import ManageRequest from "../../pages/Pharmacy/ManagePharmacy";
import ListInvoice from "../../pages/Invoice/List-Invoice";
import ManageInvoice from "../../pages/Invoice/Manage-Invoice";
import { DeliveryNotePrinter } from "../../pages/DeliveryNotePrinter";
import Login from "../../pages/Login";
import ListUser from "../../pages/User/list-user";

import ListMedicine from "../../pages/Medicine/ListMedicine";
import ListOrders from "../../pages/Orders/list-orders";

const AppRouter = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Login />} />

        <Route path="/" element={<NavigationBar />}>
          <Route path="home" element={<Home />} />
          <Route path="orders" element={<ListOrders />} />
          <Route path="pharmacy" element={<ListPharmacy />} />
          <Route path="invoice" element={<ListInvoice />} />
          {/* <Route path="invoicePrinter/:id" element={<InvoicePrinter />} /> */}
          <Route path="medicine" element={<ListMedicine />} />
          <Route path="deliveryNotePrinter" element={<DeliveryNotePrinter />} />
          <Route path="user" element={<ListUser />} />
        </Route>
      </Route>
    )
  );
  return { router };
};

export { AppRouter };
