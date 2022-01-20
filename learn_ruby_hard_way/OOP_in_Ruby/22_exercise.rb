class MyCar

  attr_accessor :year ,:color, :model, :speed

  def initialize (year,color,model, speed)
    @year = year
    @color = color
    @model = model
    @speed = speed
  end

  def speed_up(s)
    self.speed += s
  end

  def brake(b)
    self.speed -= b
  end

  def shut_down
    self.speed = 0
  end

  def change_color(c)
    self.color = c
  end

  def color
    @color
  end

  
end

five = MyCar.new(2003,'grey','BMW',0)
p five

five.speed_up(100)
p five.speed
five.brake(50)
p five.speed
p five.color
five.change_color('blue')
p five.color
