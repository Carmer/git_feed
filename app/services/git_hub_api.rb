class GitHubApi
  include HTTParty
  base_uri 'api.github.com'

  def self.received_events(login, page)
    self.class.get("/users/#{login}/received_events?page=#{page}&per_page=100")
  end

  def self.user_events(login, page)
    self.class.get("/users/#{login}/events?page=#{page}&per_page=100")
  end

  def self.public_events(page)
    self.class.get("/events?page=#{page}&per_page=100")
  end

end
