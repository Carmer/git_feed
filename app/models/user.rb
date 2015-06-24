class User < ActiveRecord::Base
  validates :login, presence: true, uniqueness: true

  def self.find_or_create_by_auth(auth_data)
    github_data = auth_data["extra"]["raw_info"]

    user = User.find_or_create_by(git_id: github_data["id"])

    user.token               = auth_data["credentials"]["token"]

    user.login               = github_data["login"]
    user.email               = github_data["email"]
    user.git_id              = github_data["id"]
    user.api_url             = github_data["url"]
    user.github_url          = github_data["html_url"]
    user.gists_url           = github_data["gists_url"]
    user.repos_url           = github_data["repos_url"]
    user.events_url          = github_data["events_url"]
    user.avatar_url          = github_data["avatar_url"]
    user.starred_url         = github_data["starred_url"]
    user.followers_url       = github_data["followers_url"]
    user.following_url       = github_data["following_url"]
    user.subscriptions_url   = github_data["subscriptions_url"]
    user.organizations_url   = github_data["organizations_url"]
    user.received_events_url = github_data["received_events_url"]

    user.save

    user
  end

end
