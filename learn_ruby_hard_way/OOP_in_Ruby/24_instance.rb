class Person

  attr_accessor :name

  def initialize(name)
    @name = name
  end

end

p = Person.new('L. Ron')

puts p.name



p.name = "Hello"
puts p.name

num1= rand(1...20)
p num1