class Api::FollowsController < ApplicationController
  def create
    debugger
    @follow = Follow.new(follow_params)
    if @follow.save
      @user = current_user
      render "api/users/show"
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  def destroy
    @follow = Follow.where(fan_id: current_user.id,
                          artist_id: params[:follow][:artist_id])
    @follow.destroy
    render 'api/users/show'
  end

  private

  def follow_params
    params.require(:follow).permit(:artist_id, :fan_id)
  end
end
