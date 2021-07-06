json.partial! 'channel', channel: @channel
json.userIds @channel.users.pluck(:id)