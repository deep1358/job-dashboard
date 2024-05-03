import { combineReducers, configureStore } from "@reduxjs/toolkit";
import jobs from "./jobs";

const reducer = combineReducers({
    jobs,
});

const store = configureStore({ reducer });

export default store;
