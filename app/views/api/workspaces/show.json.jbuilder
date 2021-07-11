json.partial! 'workspace', workspace: @workspace

@workspace.channels.includes(:users, :messages).each do |channel|
    json.channels do 
        json.set! channel.id do 
            json.extract! channel, :id, :dm_flag, :owner_id, :workspace_id, :description, :name, :updated_at
            json.created_at channel.created_time_formatted
            json.userIds channel.users.pluck(:id)
        end
    end

    channel.subscriptions.each do |subscription|
        json.channelSubscriptions do
            json.set! subscription.id do
                json.extract! subscription, :id, :subscribable_type, :subscribable_id, :subscriber_id
            end
        end
    end
    channel.messages.each do |message|
        json.workspaceMessages do
            json.set! message.id do
                json.extract! message, :id, :author_id, :channel_id, :body
                json.created_at message.created_time_formatted
                json.created_time message.created_time_number
                json.pst_time message.time_in_pst
                json.dm_msg channel.dm_flag
            end
        end
    end
end

@workspace.users.each do |user|
    json.workspaceUsers do
        json.set! user.id do
            json.extract! user, :id, :email, :first_name, :last_name, :fav_color
        end
    end
end