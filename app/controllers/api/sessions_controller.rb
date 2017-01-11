class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:username],
                                  params[:user][:password])

    if @user
      login_user(@user)
      render "api/users/show"
    else
      render(
        json: ["Invalid username/password combination"],
        status: 401
      )
    end
    # debugger
  end

  def destroy
    debugger
    if logged_in?
      logout
      render json: {}
    else
      render(json: ["No user signed in"],
       status: 404
    )
    end
  end
end
