import * as APIUtil from '../util/artist_api_util';

export const RECEIVE_ALL_ARTISTS    = 'RECEIVE_ALL_ARTISTS';
export const RECEIVE_SINGLE_ARTIST = 'RECEIVE_SINGLE_ARTIST';
export const CREATE_ARTIST         = 'CREATE_ARTIST';
export const RECEIVE_NEW_ARTIST    = 'RECEIVE_NEW_ARTIST';
export const RECEIVE_ARTIST_ERRORS = 'RECEIVE_ARTIST_ERRORS';

export const receiveAllArtists = artists => ({
	type: RECEIVE_ALL_ARTISTS,
	artists
});

export const receiveSingleArtist = artist => ({
	type: RECEIVE_SINGLE_ARTIST,
	artist
});

export const receiveNewArtist = artist => ({
	type: RECEIVE_NEW_ARTIST,
	artist
});

export const receiveArtistErrors = errors => ({
	type: RECEIVE_ARTIST_ERRORS,
	errors
});

// async
export const requestAllArtists = () => (dispatch) => {
	return APIUtil.fetchAllArtists()
		.then(artists => dispatch(receiveAllArtists(artists)));
};

export const requestSampleArtists = () => (dispatch) => {
	return APIUtil.fetchSampleArtists()
		.then(artists => dispatch(receiveAllArtists(artists)));
};

export const requestSingleArtist = (id) => (dispatch) => {
	return APIUtil.fetchSingleArtist(id).then(artist => {
		dispatch(receiveSingleArtist(artist));
		return artist;
	});
};

export const createArtist = artist => dispatch => (
	APIUtil.createArtist(artist).then(a => {
		dispatch(receiveNewArtist(a));
		return artist;
	}).fail(err => dispatch(receiveArtistErrors(err.responseJSON)))
);
