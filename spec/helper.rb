module Helpers
	def github_login
    visit login_path

    mock_auth_hash

    within("#login") do
      click_link('LOG IN WITH GITHUB')
    end
	end
end
