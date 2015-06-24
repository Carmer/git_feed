class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_or_create_by_auth(auth)
    if user.save
      flash[:success] = "One - Two - Three DO IT ... Git-yer Feed on. "
      session[:user_id] = user.id
      redirect_to user
    else
      flash.now[:success] = "Log In Unsuccessful You Rapscallion."
      render :new
    end
  end

  def destroy
    session.clear
    flash[:danger] = "Big Gulps huh? Welp - cya later"
    redirect_to login_path
  end

  private

  def auth
    request.env["omniauth.auth"]
  end
end
