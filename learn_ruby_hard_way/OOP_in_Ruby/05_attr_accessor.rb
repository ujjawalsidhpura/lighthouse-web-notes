class GoodDog
  attr_accessor :name

  def initialize(name)
    @name = name
  end

  def speak
    "#{name} says arf!"
  end
end

sparky = GoodDog.new("Sparky")
puts sparky.speak
puts sparky.name            # => "Sparky"
sparky.name = "Spartacus"
puts sparky.name            # => "Spartacus"

#attr_reader to only use getter method
#attr_writer to only use setter method
#attr_accessor for both get/set methods

#if multiple get/set for multiple variablers, then use
#attr_accessor :name, :height, :weight