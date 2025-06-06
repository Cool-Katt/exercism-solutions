class Bob
  def self.hey(remark)
    remark.strip!
    return "Fine. Be that way!" if remark.empty?
    isYelling = remark.chars.any? {|letter| letter >= 'A' && letter <= 'Z' } && remark.upcase == remark
    isQuestion = remark.end_with?("?")
    return "Calm down, I know what I'm doing!" if isYelling && isQuestion
    return "Whoa, chill out!" if isYelling
    return "Sure." if isQuestion
    "Whatever."
  end
end