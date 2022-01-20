class GoodDog
  attr_accessor :name, :age

  def initialize(name, age)
    @name = name
    @age = age
  end

  def speak
    "#{name} Arf!"
  end

  
end

sparky = GoodDog.new("Sparky" ,21 )


p sparky.name
p sparky.age
sparky.name = 'Fido'
sparky.age = 55
p sparky.name
p sparky.age
