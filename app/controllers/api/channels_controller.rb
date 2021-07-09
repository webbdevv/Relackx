class Api::ChannelsController < ApplicationController

    def index
        @channels = Channel.all.includes(:users)
        render :index
    end

    def create
        @channel = Channel.new(channel_params)
        if @channel.save!
            render :show
        else
            render json: @channel.errors.full_messages, status: 422
        end
    end

    def show
        @channel = Channel.find_by(id: params[:id])
        render :show
    end

    def destroy
        @channel = Channel.find_by(id: params[:id])
        if @channel && @channel.destroy!
            render json: @channel
        else
            render json: ["Couldn't destroy that channel"], status: 404
        end
    end

    def update
        @channel = Channel.find_by(id: params[:id])
        if @channel && @channel.update!(channel_params)
            render :show
        else
            render json: @channel.errors.full_messages, status: 422
        end
    end

    private

    def channel_params
        params.require(:channel).permit(:name, :dm_flag, :owner_id, :workspace_id, :description, :is_private)
    end
end