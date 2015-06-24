require "rails_helper"

RSpec.feature "Community-page" do
    let(:user) { User.create(login: "VanFunkenstein",
                             email: "reggieV@example.com" ) }

  scenario "User visits community page" do

    allow_any_instance_of(ApplicationController)
                          .to receive(:current_user)
                          .and_return(user)

    visit public_path

    expect(current_path).to eq(user_path()
    expect(page).to have_content("Git_Feed")
    expect(page).to have_content("Public Feed")
    expect(page).to have_content("Community Feed")
    expect(page).to have_content("Explore")
    expect(page).to have_content("Search")
    expect(page).to have_content("Filter by event type:")
    expect(page).to have_content("Create")
    expect(page).to have_content("Delete")
    expect(page).to have_content("Pull")
    expect(page).to have_content("Push")
    expect(page).to have_content("Issues")
    expect(page).to have_content("Issue Comment")
    expect(page).to have_content("Member")
    expect(page).to have_content("Fork")
    expect(page).to have_content("Watch")
    expect(page).to have_content("Public Git_Feed")

  end
end
