import * as APIUtil from '../util/follow_api_util';


export const RECEIVE_NEW_FOLLOW    = 'RECEIVE_NEW_FOLLOW';
export const REMOVE_FOLLOW				 = 'REMOVE_FOLLLOW';

export const receiveNewFollow = follow => ({
	type: RECEIVE_NEW_FOLLOW,
	follow
});

export const removeFollow = follow => ({
	type: REMOVE_FOLLOW,
	follow
});

export const createFollow = follow => dispatch => (
	APIUtil.createFollow(follow)
	.then(res => dispatch(receiveNewFollow(res)))
);

export const deleteFollow = (id) => dispatch => (
  APIUtil.removeFollow(id)
	.then(res => dispatch(removeFollow(res)))
);
