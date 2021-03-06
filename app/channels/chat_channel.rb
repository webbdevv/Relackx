class ChatChannel < ApplicationCable::Channel
  def subscribed
        if params.has_key?(:channel_id)
            @channel = Channel.find_by(id: params[:channel_id])
        end
        stream_for @channel
    end

  def room
    Room.find(params[:room_id])
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
