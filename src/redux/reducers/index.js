import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import Common from "./common";

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    common: Common,
  });
