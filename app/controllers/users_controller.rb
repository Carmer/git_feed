class UsersController < ApplicationController

  before_action :authorize!

  respond_to :json, :html

  def show
    @events = %w( MemberEvent CreateEvent DeleteEvent PushEvent PullRequestEvent IssueEvent IssueCommentEvent ForkEvent WatchEvent)
    @user = current_user
  end
end
