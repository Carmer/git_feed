class Github::API
  include HTTParty
  base_uri 'https://api.github.com'

  def received_events(user_login, page = 1, per_page = 100)
    self.class.get("/users/#{user_login}/received_events?page=#{page}&per_page=#{per_page}")
  end

  def events(user_login, page = 1, per_page = 100)
    self.class.get("/users/#{user_login}/events?page=#{page}&per_page=#{per_page}")
  end
end
