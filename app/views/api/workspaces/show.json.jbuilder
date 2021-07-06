json.partial! 'workspace', workspace: @workspace

@workspace.channels.includes(:users).each do |channel|
    json.channels do 
        json.set! channel.id do 
            json.extract! channel, :id, :dm_flag, :owner_id, :workspace_id, :description
            channel.users.each do |user|
                json.channelUsers do
                    json.set! user.id do
                        json.extract! user, :id, :email, :first_name, :last_name, :fav_color
                    end
                end
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