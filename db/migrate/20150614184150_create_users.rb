class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :login
      t.string :git_id
      t.string :avatar_url
      t.string :api_url
      t.string :github_url
      t.string :followers_url
      t.string :following_url
      t.string :gists_url
      t.string :starred_url
      t.string :subscriptions_url
      t.string :organizations_url
      t.string :repos_url
      t.string :events_url
      t.string :received_events_url
      t.string :email
      t.string :token

      t.timestamps null: false
    end
  end
end
