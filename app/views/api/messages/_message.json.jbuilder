json.extract! message, :id, :author_id, :channel_id, :parent_message_id, :body
json.created_at message.created_time_formatted
json.pst_time message.time_in_pst