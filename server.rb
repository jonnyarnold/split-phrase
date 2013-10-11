require 'sinatra'
require './sayings'

get '/' do
  sayings = SayingSplitter.new(File.read('sayings.txt'))
  sayings.get_saying
end