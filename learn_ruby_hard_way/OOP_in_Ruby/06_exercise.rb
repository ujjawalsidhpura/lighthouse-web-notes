class MyCar 

  attr_accessor :color, :model, :speed
  attr_reader :year

  def initialize (year,color,model,speed)
    @year = year
    @color = color
    @model = model
    @speed = speed
  end

  def speed_up(s)
    self.speed = self.speed + s
  end

  def brake (b)
    self.speed = self.speed - b
  end

  def car_off
    self.speed = 0
  end

  def change_color (color)
    self.color = color
  end

  def view_color 
    self.color
  end

  def view_year
    self.year
  end

  def modify_color(color)
    self.color = color
    puts "We are going to spray your car with a nice coat of #{color}"
  end

end

five_series = MyCar.new('2003','grey','bmw',50)

five_series.speed_up(10)
puts five_series.speed

five_series.brake(5)
puts five_series.speed

five_series.car_off
puts five_series.speed

puts five_series.view_color

five_series.change_color('Blue')
puts five_series.view_color

# five_series.view_year('1000') 
#Gives an error since year is read ONLY

five_series.modify_color('red')



=begin
  Alternate solution from the book

  class MyCar

  def initialize(year, model, color)
    @year = year
    @model = model
    @color = color
    @current_speed = 0
  end

  def speed_up(number)
    @current_speed += number
    puts "You push the gas and accelerate #{number} mph."
  end

  def brake(number)
    @current_speed -= number
    puts "You push the brake and decelerate #{number} mph."
  end

  def current_speed
    puts "You are now going #{@current_speed} mph."
  end

  def shut_down
    @current_speed = 0
    puts "Let's park this bad boy!"
  end
end

lumina = MyCar.new(1997, 'chevy lumina', 'white')
lumina.speed_up(20)
lumina.current_speed
lumina.speed_up(20)
lumina.current_speed
lumina.brake(20)
lumina.current_speed
lumina.brake(20)
lumina.current_speed
lumina.shut_down
lumina.current_speed
  
=end