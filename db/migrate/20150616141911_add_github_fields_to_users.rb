class AddGithubFieldsToUsers < ActiveRecord::Migration
  def change
    add_column :users, :github_received_events, :json, default: []
    add_column :users, :github_events, :json, default: []
  end
end
