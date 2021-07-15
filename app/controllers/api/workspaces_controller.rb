class Api::WorkspacesController < ApplicationController

    def index
        @user = User.find_by(id: params[:user_id])
        @workspace_subscriptions = @user.subscribed_workspaces.includes(:workspace)
        @workspaces = []
        @workspace_subscriptions.each do |s|
            @workspaces.push(s.workspace)
        end
        render :index
    end

    def create
        @workspace = Workspace.new(workspace_params)
        if @workspace.save
            render json: @workspace
        else
            render json: @workspace.errors.full_messages, status: 422
        end
    end

    def show
        @workspace = Workspace.includes(:channels, :users, :subscriptions, :messages).find_by(id: params[:id])
        render :show
    end

    def destroy
        @workspace = Workspace.find_by(id: params[:id])
        if @workspace && @workspace.destroy
            render :index
        else
            render json: ["Couldn't destroy that workspace"], status: 404
        end
    end

    def update
        @workspace = Workspace.find_by(id: params[:id])
        if @workspace && @workspace.update!(workspace_params)
            render :show
        else
            render json: @workspace.errors.full_messages
        end
    end

    private

    def workspace_params
        params.require(:workspace).permit(:name, :owner_id, :general_channel, :id)
    end
end