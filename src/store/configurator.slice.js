import { bbqStyle } from "@/utils/exteriorInteriorFinish";
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
      model: null,
      color: null,
      interior: null,
      counterTop: null,
      doorConfig: null,
      bbqStyle: null,
      applianceGas: null,
      applianceExtractor: null,
      applianceSink: null,
      applianceFridge: null,
      installationRequirements: {},
      productTotalPrice: 0,
      checkoutData: {}
};
export const configuratorSlice = createSlice({
  name: "configurator",
  initialState,
    reducers: {
        setModel: (state, action) => {
            state.model = action.payload;
        },
        setColor: (state, action) => {
            state.color = action.payload;
        },
        setInterior: (state, action) => {
            state.interior = action.payload;
        },
        setCounterTop: (state, action) => {
            state.counterTop = action.payload;
        },
        setDoorConfig: (state, action) => {
            state.doorConfig = action.payload;
        },
        setBBQStyle: (state, action) => {
            state.bbqStyle = action.payload;
        },
        setApplianceGas: (state, action) => {
            state.applianceGas = action.payload;
        },
        setApplianceExtractor: (state, action) => {
            state.applianceExtractor = action.payload;
        },
        setApplianceSink: (state, action) => {
            state.applianceSink = action.payload;
        },
        setApplianceFridge: (state, action) => {
            state.applianceFridge = action.payload;
        },
        setInstallationRequirements: (state, action) => {
            state.installationRequirements = action.payload;
        },
        setProductTotalPrice: (state, action) => {
            state.productTotalPrice = action.payload;
        },
        setCheckoutData: (state, action) => {
            state.checkoutData = action.payload;
        },
    },
});
export const { setModel, setColor, setInterior, setCounterTop, setDoorConfig, setBBQStyle, setApplianceGas, setApplianceExtractor, setApplianceSink, setApplianceFridge, setInstallationRequirements, setProductTotalPrice, setCheckoutData } = configuratorSlice.actions;
export default configuratorSlice.reducer;