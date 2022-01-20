class Game
  attr_accessor = :res
  attr_reader :player1, :player2

  def initialize(res)
    @player1 = 3
    @player2 = 3
    @res = res
    @turn = player1
  end

  def math_question
    @num1 = rand(1...20)
    @num2 = rand(1...20)
    "What does #{num1} plus #{num2} equal?"
  end
  
  #This class will alternate between player 1 and player 2.
  def math_question_output
    @turn = player1 ?
     player = player2 && @turn = player1 :
     player = player1 && @turn =player2
    
    "#{player} : #{math_question}"
  end

  def answer
     res = gets.chomp

    if res == @num1 + @num2 
      "Yes Correct answer"
    else
      player -= 1
      "Wrong answer"
    end 

  end

  if @player1 != 0 || @player2 != 0
    math_question_output
    answer
  end

end

 