class Api::SubscriptionsController < ApplicationController

    def index
        @subscriptions = Subscription.all
        render :index
    end

    def create
        @subscription = Subscription.new(subscription_params)
        if @subscription.save!
            debugger
            if @subscription.subscribable_type == "Workspace"
                workspace = @subscription.workspace
                ch_subscription = Subscription.create!({subscriber_id: @subscription.subscriber_id, subscribable_id: workspace.general_channel, subscribable_type: "Channel"})
                puts ch_subscription
            end
            render "api/subscriptions/show"
        else
            puts @subscription.errors.full_messages
            render json: @subscription.errors.full_messages, status: 422
        end
    end

    def show
        @subscription = Subscription.find_by(id: params[:id])
        render :show
    end

    def destroy
        @subscription = Subscription.find_by(id: params[:id])
        if @subscription && @subscription.destroy!
            render json: @subscription, status: 200
        else
            render json: ["Couldn't destroy that subscription"], status: 404
        end
    end

    private

    def subscription_params
        params.require(:subscription).permit(:subscriber_id, :subscribable_type, :subscribable_id, :admin)
    end
end