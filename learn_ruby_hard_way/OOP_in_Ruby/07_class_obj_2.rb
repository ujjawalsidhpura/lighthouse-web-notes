class GoodDog

  @@number_of_dogs = 0

  def initialize
    @@number_of_dogs += 1
  end

  def self.total_num_of_dogs
    @@number_of_dogs
  end

end

puts GoodDog.total_num_of_dogs # 0

dog1 = GoodDog.new

puts GoodDog.total_num_of_dogs  # 1