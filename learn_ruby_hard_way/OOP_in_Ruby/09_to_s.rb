class GoodDog
  DOG_YEARS = 7

  attr_accessor :name, :age

  def initialize(n,a)
    @name = n
    @age = a * DOG_YEARS

  end

  def to_s
    "This dogs name is #{name} and it age #{age}"
  end

end

sparky = GoodDog.new('sparky',4)
puts sparky

p sparky