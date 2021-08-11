class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        if @user.save
            login(@user)
            Subscription.create!({subscriber_id: @user.id, subscribable_type: "Workspace", subscribable_id: 1})
            Subscription.create!({subscriber_id: @user.id, subscribable_type: "Channel", subscribable_id: 6})
            render "api/users/show"
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    private
    
    def user_params
        params.require(:user).permit(:email, :first_name, :last_name, :fav_color, :password)
    end
end