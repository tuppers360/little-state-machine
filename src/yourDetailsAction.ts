import { GlobalState } from "little-state-machine";

export function updateFirstLastName(
  state: GlobalState,
  payload: {
    firstname: string;
    lastname: string;
  }
) {
  return {
    ...state,
    yourDetails: {
      ...payload
    }
  };
}
