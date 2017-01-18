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

$.ajax({
  method: 'POST',
  url: 'api/follows',
  data: {follow: {artist_id: 200, fan_id: 962} }
});
