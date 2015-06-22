class GitHubAuth
  include HTTParty
  base_uri 'https://github.com'

  def get_code
    self.class.get("/login/oauth/authorize?scope=user:email&client_id=#{ENV["GITHUB_KEY"]}")
  end

  def post_code_get_token(code)
    self.class.post("/login/oauth/access_token", { query: {:client_id => ENV["GITHUB_KEY"], :client_secret => ENV["GITHUB_SECRET"], :code => code }, accept: :json })
  end
end
