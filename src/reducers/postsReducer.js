import {FETCH_POSTS, CREATE_POST, FETCH_POST_DETAIL, DELETE_POST} from '../actions/index'
import _ from "lodash"

export default function(state={}, action) {
  switch(action.type){
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, "id");
    case CREATE_POST:
      return state;
    case FETCH_POST_DETAIL:
      return {...state, [action.payload.data.id]: action.payload.data};
    case DELETE_POST:
      return _.omit(state, action.payload);


    default:
      return state
  }
}