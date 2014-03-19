require 'sinatra'
require 'sinatra/json'

get '/posts.json' do
  json posts
end

get '/posts/:id.?:format?' do
  post = posts.detect { |post| post[:id] == params[:id].to_i }
  json post
end

def posts
  @posts ||=
    [{
      id: 1,
      title: "How to build an isomorphic app.",
      author: "spike",
      body: "It's really not that hard!",
      created_at: "2013-11-05T13:56:15.034Z",
    }, {
      id: 2,
      title: "Why JavaScript is eating the world.",
      author: "spike",
      body: "It's the lingua franca of the web.",
      created_at: "2013-11-04T17:23:01.329Z",
    }]
end
