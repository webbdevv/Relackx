class Api::WorkspacesController < ApplicationController

    def index
        @workspaces = Workspace.all.includes(:channels, :users)
        render :index
    end

    # def create
    #     @workspace = Workspace.new(channel_params)
    #     if @workspace.save
    #         render "api/workspaces/show"
    #     else
    #         render json: @workspace.errors.full_messages, status: 422
    #     end
    # end

    def show
        @workspace = Workspace.includes(:channels, :users).find_by(id: params[:id])
        render :show
    end

    # def destroy
    #     @workspace = Workspace.find_by(id: params[:id])
    #     if @workspace && workspace.destroy
    #         render :index
    #     else
    #         render json: ["Couldn't destroy that workspace"], status: 404
    #     end
    # end

    private

    def workspace_params
        params.require(:workspace).permit(:name, :owner_id)
    end
end