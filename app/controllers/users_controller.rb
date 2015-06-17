class UsersController < ApplicationController

  before_action :authorize!

  respond_to :json, :html

  def show
    @user = User.find_by!(id: params[:id])
    GithubQuery.perform_async(@user.login, current_user.token)
  end

  def received_events
    @user = User.find_by!(id: params[:id])

    respond_with :json, @user.github_received_events[params[:page].to_i || 1]
  end

  def events
    @user = User.find_by!(id: params[:id])

    respond_with :json, @user.github_events[params[:page].to_i || 1]
  end
end
