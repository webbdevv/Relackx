export const fetchMessages = () => (
  $.ajax({
    method: 'GET',
    url: 'api/messages',
  })
);

export const fetchMessage = messageId => (
  $.ajax({
    method: 'GET',
    url: `api/messages/${messageId}`
  })
);

export const createMessage = message => (
  $.ajax({
    method: 'POST',
    url: 'api/messages',
    data: { message }
  })
);

export const updateMessage = message => (
    $.ajax({
    method: 'patch',
    url: `api/messages/${message.id}`,
    data: { message }
  })
)

export const deleteMessage = messageId => (
  $.ajax({
    method: 'delete',
    url: `api/messages/${messageId}`,
  })
);
