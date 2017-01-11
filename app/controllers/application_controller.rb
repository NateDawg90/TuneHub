class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  helper_method :current_user, :logged_in?

  private

  def current_user
    # debugger
    return nil unless session[:session_token]
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def login_user(user)
    # debugger
    session[:session_token] = user.reset_session_token
    @current_user = user
  end

  def logged_in?
    !!current_user
  end

  def logout
    current_user.reset_session_token
    session[:session_token] = nil
  end

  def require_logged_in!
    render json: {base: ['invalid credentials']}, status: 401 if !current_user
  end
end
