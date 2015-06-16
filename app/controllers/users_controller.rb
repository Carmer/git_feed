class UsersController < ApplicationController

  before_action :authorize!

  def show
    @user = User.find_by!(id: params[:id])
  end
end
