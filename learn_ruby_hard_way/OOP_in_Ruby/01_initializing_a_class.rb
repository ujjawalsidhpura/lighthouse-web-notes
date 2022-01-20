
#Ruby defines the attributes and behaviors of its objects in classes. You can think of classes as basic outlines of what an object should be made of and what it should be able to do. To define a class, we use syntax similar to defining a method. We replace the def with class and use the CamelCase naming convention to create the name. We then use the reserved word end to finish the definition. Ruby file names should be in snake_case, and reflect the class name. Thus, in the below example, the file name is good_dog.rb and the class name is GoodDog.


#file good_dog.rb-->

    class GoodDog
    end

    sparky = GoodDog.new

    class HumanBeing
    end

    bob = HumanBeing.new


#Sparky is an object or instance of class GoodDog. This creation og new object from class is called instantiation.


#module
#A module is a collection of behaviors that is usable in other classes via mixins. 

#Let's say we wanted our GoodDog class to have a speak method but we have other classes that we want to use a speak method with too. Here's how we'd do it

module Speak 
  def speak (sound)
    puts sound
  end

class GoodDog
  include Speak
end

class HumanBeing
  include Speak
end

sparky = GoodDog.new
sparky.speak("Arf!")       
bob = HumanBeing.new
bob.speak("Hello!")  
end