class Animal

  attr_accessor :name

    def initialize(name)
      @name = name
    end

end

class GoodDog < Animal
  def initialize (name,color)
    super(name)
    @color = color
  end
end

bruno = GoodDog.new('bruno','brown')
p bruno