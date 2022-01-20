class GoodDog
  @@number_of_dogs = 0

  def initialize
    @@number_of_dogs += 1
  end

  def self.total_num
    @@number_of_dogs
  end

  def to_s
    ''
  end

end

p GoodDog.total_num

dog1 = GoodDog.new
dog2 =GoodDog.new

p GoodDog.total_num

puts GoodDog.ancestors