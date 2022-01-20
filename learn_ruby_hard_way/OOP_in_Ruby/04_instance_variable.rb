class GoodDog 
  def initialize (name)
    @name = name
  end

  def name #Previous name: get_name  
    @name
  end

  def name=(n) # Previous name: set_name=
    @name = n
  end

  def speak
    "#{@name} says phow phow"
  end

end

# @name is called an Instance Variable

sparky = GoodDog.new('Sparky')

puts sparky.speak
puts sparky.get_name
#lets use setter to set/change name of sparky
sparky.set_name = 'new name'
puts sparky.get_name

#as a convention, Rubyists typically want to name those getter and setter methods using the same name as the instance variable they are exposing and setting. We'll make the change to our code as well: