require 'rails_helper'

RSpec.describe User, type: :model do
  let(:user) {User.create(login: "Reginald", email: "reg@example.com")}

  it "has a login name" do
    expect(user.login).to eq("Reginald")
  end
end
