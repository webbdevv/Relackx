export const fetchChannels = () => (
  $.ajax({
    method: 'GET',
    url: 'api/channels',
  })
);

export const fetchChannel = channelId => (
  $.ajax({
    method: 'GET',
    url: `api/channels/${channelId}`
  })
);

export const createChannel = channel => (
  $.ajax({
    method: 'POST',
    url: 'api/channels',
    data: { channel }
  })
);

export const updateChannel = channel => (
    $.ajax({
    method: 'patch',
    url: `api/channels/${channel.id}`,
    data: { channel }
  })
)

export const deleteChannel = channelId => (
  $.ajax({
    method: 'delete',
    url: `api/channels/${channelId}`,
  })
);
