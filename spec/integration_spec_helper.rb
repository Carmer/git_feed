module IntegrationSpecHelper
  def login_with_oauth
    visit "/auth/github"
  end
end
