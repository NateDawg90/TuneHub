class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)

    if @user.save
      login_user(@user)
      render "api/users/show"
    else
      # errors
      render json: @user.errors.full_messages, status: 422
    end
  end

  def destroy
    @user = User.find(params[:id])
    @user.destroy
    render :show
  end

  def index
    @users = User.all
  end

  def show
    @user = User.find(params[:id])
  end



  private

  def user_params
    params.require(:user).permit(:password, :username)
  end

end
