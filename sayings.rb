class SayingSplitter

  def initialize(saying_strings)
    # Turns "A|B\nC|D" into [[A, B], [C, D]]
    @sayings = saying_strings
      .split("\n")
      .reduce([]) { |all, s| all << s.split("|") }
  end

  def get_saying
    generated_saying = [@sayings.sample.first, @sayings.sample.last]
    generated_saying.join " "
  end

end