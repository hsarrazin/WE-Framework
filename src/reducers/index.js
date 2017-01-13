import { combineReducers } from "redux";
import { entity } from "./entity";
import { propertyRegistry } from "./propertyRegistry";

const allReducers = combineReducers({
  entity,
  propertyRegistry
});

export default allReducers;
