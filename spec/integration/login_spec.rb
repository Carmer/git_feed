require 'rails_helper'

feature "OAuth login" do
  xscenario "can log in with Github" do

  login_with_oauth

  expect(page).to have_content("Git_Feed")

  end
end