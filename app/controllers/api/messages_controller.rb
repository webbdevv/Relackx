class Api::MessagesController < ApplicationController

    def index
        @messages = Message.all
        render :index
    end

    def create
        @message = Message.new(message_params)
        if @message.save!
            message = convert_to_obj(@message)
            ChatChannel.broadcast_to(Channel.find_by(id: @message.channel_id), message)
            render :show
        else
            render json: @message.errors.full_messages, status: 422
        end
    end

    def show
        @message = Message.find_by(id: params[:id])
        render :show
    end

    def destroy
        @message = Message.find_by(id: params[:id])
        if @message && @message.destroy!
            message = convert_to_obj(@message)
            message['destroyed'] = true
            ChatChannel.broadcast_to(Channel.find_by(id: @message.channel_id), message)
            render json: @message, status: 200
        else
            render json: ["Couldn't delete that message"], status: 404
        end
    end

    def update
        @message = Message.find_by(id: params[:id])
        if @message && @message.update!(message_params)
            message = convert_to_obj(@message)
            ChatChannel.broadcast_to(Channel.find_by(id: @message.channel_id), message)
            render json: message, status: 200
        else
            render json: @message.errors.full_messages, status: 422
        end
    end

    def convert_to_obj(msg)
        message = msg.attributes
        message["created_at"] = msg.created_time_formatted
        message["pst_time"] = msg.time_in_pst
        message
    end
    private

    def message_params
        params.require(:message).permit(:author_id, :channel_id, :parent_message_id, :body)
    end
end