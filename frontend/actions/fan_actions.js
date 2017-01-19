import * as APIUtil from '../util/fan_api_util';

export const RECEIVE_ALL_FANS   = 'RECEIVE_ALL_FANS';
export const RECEIVE_SINGLE_FAN = 'RECEIVE_SINGLE_FAN';
export const CREATE_FAN         = 'CREATE_FAN';
export const RECEIVE_NEW_FAN    = 'RECEIVE_NEW_FAN';
export const RECEIVE_FAN_ERRORS = 'RECEIVE_FAN_ERRORS';


export const receiveAllFans = fans => ({
	type: RECEIVE_ALL_FANS,
	fans
});

export const receiveSingleFan = fan => ({
	type: RECEIVE_SINGLE_FAN,
	fan
});

export const receiveNewFan = fan => ({
	type: RECEIVE_NEW_FAN,
	fan
});

export const receiveFanErrors = errors => ({
	type: RECEIVE_FAN_ERRORS,
	errors
});

// async
export const requestAllFans = () => (dispatch) => {
	return APIUtil.fetchAllFans()
		.then(fans => dispatch(receiveAllFans(fans)));
};

export const requestSingleFan = (id) => (dispatch) => {
	return APIUtil.fetchSingleFan(id).then(fan => {
		dispatch(receiveSingleFan(fan));
		return fan;
	});
};

export const createFan = fan => dispatch => (
	APIUtil.createFan(fan).then(a => {
		dispatch(receiveNewFan(a));
		return fan;
	}).fail(err => dispatch(receiveFanErrors(err.responseJSON)))
);
