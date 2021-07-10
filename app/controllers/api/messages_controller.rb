class Api::MessagesController < ApplicationController

    def index
        @messages = Message.all
        render :index
    end

    def create
        @message = Message.new(message_params)
        if @message.save!
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
            render json: @message, status: 200
        else
            render json: ["Couldn't delete that message"], status: 404
        end
    end

    def update
        @message = Message.find_by(id: params[:id])
        if @message && @message.update!(message_params)
            render json: @message, status: 200
        else
            render json: @message.errors.full_messages, status: 422
        end
    end

    private

    def message_params
        params.require(:message).permit(:author_id, :channel_id, :parent_message_id, :body)
    end
end