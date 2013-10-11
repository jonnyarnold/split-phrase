require 'sinatra'
require './sayings'

get '/' do
  sayings = SayingSplitter.new(saying_strings)
  sayings.get_saying
end