class WorkspaceNotificationChannel < ApplicationCable::Channel
  def subscribed
        @workspace = Workspace.find_by(id: params[:workspace_id])
        stream_for @workspace
    end

  def room
    Room.find(params[:room_id])
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
