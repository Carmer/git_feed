class GithubQuery
  include Sidekiq::Worker

  NUMBER_OF_PAGES = 5

  def perform(user_login, token)
    user = User.find_by(login: user_login)

    NUMBER_OF_PAGES.times do |i|
      user.github_received_events << Github::API.new.received_events(user_login, i, token).body
    end

    NUMBER_OF_PAGES.times do |i|
      user.github_events << Github::API.new.events(user_login, i, token).body
    end

    user.save
  end
end
