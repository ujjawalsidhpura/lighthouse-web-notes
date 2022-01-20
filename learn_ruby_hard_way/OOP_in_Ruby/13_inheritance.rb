class Animal

  def speak
    "hello!"
  end
end

class GoodDog < Animal

  def speak
    super + 'Henlo'
  end

end

sparky = GoodDog.new
p sparky.speak