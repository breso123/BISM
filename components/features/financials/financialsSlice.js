import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loadStatements } from "../../../pages/services/apiFinancials";
import {
  additionalPropsBS,
  additionalPropsCF,
  additionalPropsIS,
  completed,
  setFinancialRatios,
} from "../../../helpers/fsModifiers";

export const fetchStatements = createAsyncThunk(
  "financials/fetchStatements",
  async function () {
    const income_statement = await loadStatements(
      "income_statement",
      additionalPropsIS,
      "sa"
    );

    const balance_sheet = await loadStatements(
      "balance_sheet",
      additionalPropsBS,
      "tas"
    );
    const cash_flow = await loadStatements(
      "cash_flow",
      additionalPropsCF,
      "tinfl"
    );

    const statementsFirst = { income_statement, balance_sheet, cash_flow };
    const financial_ratios = Object.values(setFinancialRatios(statementsFirst));
    const statements = completed({ ...statementsFirst, financial_ratios });

    localStorage.setItem("statements", JSON.stringify(statements));

    return statements;
  }
);

const initialState = {
  status: "idle",
  error: "",
  statements: {},
  financialsImg: "https://static.thenounproject.com/png/3311685-200.png",
  item: null,
  supportItem: "G",
};

const financialsSlice = createSlice({
  name: "financials",
  initialState,
  reducers: {
    switchStatements(state, action) {
      state.item = null;
      state.financialsImg = action.payload.img;
    },

    switchItem(state, action) {
      state.item = action.payload;
    },

    switchSupportItem(state, action) {
      state.supportItem = action.payload;
    },

    leaveChart(state) {
      state.item = null;
      state.supportItem = "G";
    },

    leaveFeature(state) {
      state.item = null;
      state.financialsImg =
        "https://static.thenounproject.com/png/3311685-200.png";
      state.supportItem = "G";
    },
  },

  extraReducers: (builder) =>
    builder
      .addCase(fetchStatements.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchStatements.fulfilled, (state, action) => {
        state.statements = action.payload;
        state.status = "idle";
      })
      .addCase(fetchStatements.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      }),
});

export const {
  switchStatements,
  switchItem,
  switchSupportItem,
  leaveFeature,
  leaveChart,
} = financialsSlice.actions;

export default financialsSlice.reducer;
