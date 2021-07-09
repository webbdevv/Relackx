json.partial! 'workspace', workspace: @workspace

@workspace.channels.includes(:users).each do |channel|
    json.channels do 
        json.set! channel.id do 
            json.extract! channel, :id, :dm_flag, :owner_id, :workspace_id, :description, :name, :created_at, :updated_at
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
                json.extract! message, :id, :author_id, :channel_id, :body, :created_at
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