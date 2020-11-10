import Immutable from 'seamless-immutable';
import { createActions, createReducer } from 'reduxsauce';

const { Creators: tarbaseListActions, Types } = createActions({
  getTarbaseList: ['data', 'callback'],
  getTarbaseListSuccess: ['data'],
  clearTarbaseList: [],
  setPageTarbaseList: ['page'],
});

const INITIAL_STATE: object = Immutable({
  count: 0,
  next: null,
  previous: null,
  results: [],
  offset: 0,
  limit: 10,
  pages: 0,
  page: 1,
});

export default createReducer(INITIAL_STATE, {
  [Types.GET_TARBASE_LIST_SUCCESS]: (state = INITIAL_STATE, { data }) => {
    var pages = 0;

    if (data?.count && data?.count > 0) {
      pages = Math.ceil(data.count / 10);
    }

    return Immutable.merge(state, { ...data, pages });
  },
  [Types.CLEAR_TARBASE_LIST]: () => INITIAL_STATE,
  [Types.SET_PAGE_TARBASE_LIST]: (state = INITIAL_STATE, { page }) =>
    Immutable.merge(state, { page }),
});

export { tarbaseListActions, Types as tarbaseListTypes };
