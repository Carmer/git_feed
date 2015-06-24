require 'rails_helper'

RSpec.describe User, type: :model do
  it "has a login name" do

    data = {"provider"=>"github",
 "uid"=>"9501766",
 "info"=>
  {"nickname"=>"Carmer",
   "email"=>"carmer@example.com",
   "name"=>"Andrew Carmer",
   "image"=>"https://avatars.githubusercontent.com/u/9501766?v=3",
   "urls"=>{"GitHub"=>"https://github.com/Carmer", "Blog"=>""}},
 "credentials"=>{"token"=>"123456789", "expires"=>false},
 "extra"=>
  {"raw_info"=>
    {"login"=>"Carmer",
     "id"=>9501766,
     "avatar_url"=>"https://avatars.githubusercontent.com/u/9501766?v=3",
     "gravatar_id"=>"",
     "url"=>"https://api.github.com/users/Carmer",
     "html_url"=>"https://github.com/Carmer",
     "followers_url"=>"https://api.github.com/users/Carmer/followers",
     "following_url"=>"https://api.github.com/users/Carmer/following{/other_user}",
     "gists_url"=>"https://api.github.com/users/Carmer/gists{/gist_id}",
     "starred_url"=>"https://api.github.com/users/Carmer/starred{/owner}{/repo}",
     "subscriptions_url"=>"https://api.github.com/users/Carmer/subscriptions",
     "organizations_url"=>"https://api.github.com/users/Carmer/orgs",
     "repos_url"=>"https://api.github.com/users/Carmer/repos",
     "events_url"=>"https://api.github.com/users/Carmer/events{/privacy}",
     "received_events_url"=>"https://api.github.com/users/Carmer/received_events",
     "type"=>"User",
     "site_admin"=>false,
     "name"=>"Andrew Carmer",
     "company"=>"",
     "blog"=>"",
     "location"=>"",
     "email"=>"carmer@example.com",
     "hireable"=>false,
     "bio"=>nil,
     "public_repos"=>44,
     "public_gists"=>2,
     "followers"=>16,
     "following"=>61,
     "created_at"=>"2014-11-01T18:16:34Z",
     "updated_at"=>"2015-06-23T03:42:29Z"}}}

    user = User.find_or_create_by_auth(data)


    expect(user.login).to eq("Carmer")
    expect(user.email).to eq("carmer@example.com")
    expect(user.git_id).to eq("9501766")
    expect(user.api_url).to eq("https://api.github.com/users/Carmer")
    expect(user.github_url).to eq("https://github.com/Carmer")
    expect(user.gists_url).to eq("https://api.github.com/users/Carmer/gists{/gist_id}")
    expect(user.repos_url).to eq("https://api.github.com/users/Carmer/repos")
    expect(user.events_url).to eq("https://api.github.com/users/Carmer/events{/privacy}")
    expect(user.avatar_url).to eq("https://avatars.githubusercontent.com/u/9501766?v=3")
    expect(user.starred_url).to eq("https://api.github.com/users/Carmer/starred{/owner}{/repo}")
    expect(user.followers_url).to eq("https://api.github.com/users/Carmer/followers")
    expect(user.following_url).to eq("https://api.github.com/users/Carmer/following{/other_user}")
    expect(user.subscriptions_url).to eq("https://api.github.com/users/Carmer/subscriptions")
    expect(user.organizations_url).to eq("https://api.github.com/users/Carmer/orgs")
    expect(user.received_events_url).to eq("https://api.github.com/users/Carmer/received_events")

  end
end
