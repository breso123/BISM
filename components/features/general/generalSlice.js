import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loadDefault, loadStock } from "../../../pages/services/apiFinancials";

export const fetchGeneral = createAsyncThunk(
  "general/fetchGeneral",
  async function () {
    const generalData = await loadDefault("general");
    const logoData = await loadDefault("logo");

    const general = { ...generalData, logo: logoData.url };
    localStorage.setItem("general", JSON.stringify(general));

    return general;
  }
);

export const fetchEarnings = createAsyncThunk(
  "general/fetchEarnings",
  async function () {
    const earningsData = await loadDefault("earnings");
    localStorage.setItem("earnings", JSON.stringify(earningsData));

    return earningsData;
  }
);

export const fetchStock = createAsyncThunk(
  "general/fetchStock",
  async function (_, { getState }) {
    const { interval, outputSize } = getState().general;

    const stockData = await loadStock(interval, outputSize);
    const stockDataFull = await loadStock("1month", 5000);

    localStorage.setItem("stock", JSON.stringify(stockData));
    localStorage.setItem("stockFull", JSON.stringify(stockDataFull));
    const pld = { stockData, stockDataFull };

    return pld;
  }
);

const initialState = {
  status: "idle",
  error: "",
  general: {},
  stock: {},
  stockFull: {},
  earnings: [],
  generalKey: "stock_chart",
  generalImg: "https://static.thenounproject.com/png/1035311-200.png",
  stockChart: "area",
  interval: "1min",
  outputSize: "90",
  monthlyReturn: null,
};

const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    switchGeneralItems(state, action) {
      state.generalImg = action.payload.img;
      state.generalKey = action.payload.key;
    },
    switchChartType(state, action) {
      state.stockChart = action.payload;
    },
    showMonthlyReturnData(state, action) {
      state.monthlyReturn = action.payload;
    },
    leaveFeatureGeneral(state) {
      state.generalKey = "stock_chart";
      state.generalImg =
        "https://static.thenounproject.com/png/1035311-200.png";
    },
  },

  extraReducers: (builder) =>
    builder
      .addCase(fetchGeneral.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchGeneral.fulfilled, (state, action) => {
        state.general = action.payload;
        state.status = "idle";
      })
      .addCase(fetchGeneral.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      })
      .addCase(fetchEarnings.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchEarnings.fulfilled, (state, action) => {
        state.earnings = action.payload;
        state.status = "idle";
      })
      .addCase(fetchEarnings.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      })
      .addCase(fetchStock.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchStock.fulfilled, (state, action) => {
        state.stock = action.payload.stockData;
        state.stockFull = action.payload.stockDataFull;
      })
      .addCase(fetchStock.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      }),
});

export const {
  switchGeneralItems,
  switchChartType,
  leaveFeatureGeneral,
  showMonthlyReturnData,
} = generalSlice.actions;

export default generalSlice.reducer;
