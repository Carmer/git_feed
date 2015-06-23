class UsersController < ApplicationController

  before_action :authorize!

  respond_to :json, :html

  def show
    @user = current_user
  end

  def public
    @user = current_user
  end

  def explore
    @user = current_user
  end
end
