class MyCar

  attr_accessor :name , :mileage

  def initialize (n,m)
    self.name = n
    self.mileage = m
  end

  def self.gas_mileage(gallons,miles)
    puts "this #{miles/gallons } is mileage"
  end

  def to_s
    puts "This is your #{name}. This success"
  end
end

bmw = MyCar.new('five',10)

MyCar.gas_mileage(12,15)

bmw.to_s