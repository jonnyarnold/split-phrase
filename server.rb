require 'sinatra'
require './sayings'

set :static_cache_control, [:public, max_age: 60 * 60 * 24]

get '/' do
  redirect '/index.html'
end

get '/saying' do
  sayings = SayingSplitter.new(File.read('sayings.txt'))
  sayings.get_saying
end

get '/bg' do
  chosen_path = Dir['public/images/*.jpg'].sample # Take a random image
  chosen_path['public/'.length..-1]
end