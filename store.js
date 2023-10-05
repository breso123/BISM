import { configureStore } from "@reduxjs/toolkit";
import financialsReducer from "./components/features/financials/financialsSlice";
import generalReducer from "./components/features/general/generalSlice";

const store = configureStore({
  reducer: {
    financials: financialsReducer,
    general: generalReducer,
  },
});

export default store;
