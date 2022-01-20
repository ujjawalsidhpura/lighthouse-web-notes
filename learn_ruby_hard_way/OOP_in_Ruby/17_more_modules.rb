module Mammal
  class Dog
    def speak(sound)
      p "#{sound}"
    end
  end

  class Cat
    def say_name(name)
      p "#{name}"
    end
  end

  def self.some_method(num)
    num ** 2
  end

end

buddy = Mammal::Dog.new
kitty = Mammal::Cat.new

buddy.speak('hello')
kitty.say_name('ujjawal')

p value = Mammal.some_method(4)
#also like this
p value = Mammal::some_method(4)