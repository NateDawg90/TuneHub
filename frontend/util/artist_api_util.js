export const fetchAllArtists = (data) => {
  return $.ajax({
    method: 'GET',
    url: 'api/users',
    data
  });
};

export const fetchSingleArtist = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/users/${id}`
  });
};

export const createArtist = (user) => {
  return $.ajax({
    method: 'POST',
    url: 'api/users/',
    data: { user }
  });
};

export const fetchSampleArtists = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/users',
    data: {sample: true}
  });
};

export const createFollow = (follow) => {
  return $.ajax({
    method: 'POST',
    url: 'api/follows',
    data: { follow }
  });
};

export const removeFollow = () => {
  return $.ajax({
    method: 'DELETE',
    url: 'api/follows'
  });
};
