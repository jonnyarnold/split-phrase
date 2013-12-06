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
  chosen_path = Dir[settings.public_folder + '/images/*.jpg'].sample # Take a random image
  chosen_path[(settings.public_folder.length+1)..-1] # Take off the public folder and /
end