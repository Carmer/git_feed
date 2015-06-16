class UsersController < ApplicationController

  before_action :authorize!

  def show
    @user = User.find_by!(id: params[:id])
  end

  def events
    @user = User.find_by!(login: params[:id])

    render text: @user.github_events[params[:page].to_i || 1]
  end

  def received_events
    @user = User.find_by!(login: params[:id])

    render text: @user.github_received_events[params[:page].to_i || 1]
  end
end
