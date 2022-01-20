class GoodDog

  DOG_YEARS = 7

  attr_accessor :name, :age
  def initialize (n,a)
  self.name = n
  self.age = a
  end

  private

  def human_years
    age * DOG_YEARS
  end

  def public_something
   "Human years is #{human_years}"
  end

  
end

sparky = GoodDog.new('sparky',4)

# p sparky.human_years
#this gives an error

sparky.public_something
