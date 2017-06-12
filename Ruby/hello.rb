# puts 'hello'

# animals = ['cat', 'dog', 'bear']
# puts 'give me your name'
# name = gets.chomp
# puts "your name is #{name.length} letters long"
# puts "here's a random animal: #{animals.sample}"

# if name == 'jeff'
# 	puts 'his name if jeff!!!'
# end

# unless name == 'jeff'
# 	puts 'the name is not jeff'
# end

comOptions = ['r', 'p', 's']

cc = comOptions.sample
puts "computer chose #{cc}"

puts 'choose r, p or s'
uc = gets.chomp

if cc == uc 
    puts 'you tie'
elsif (cc == 'r' and uc == 's') or (cc == 'p' and uc == 'r') or (cc == 's' and uc == 'p')
    puts 'computer won'
else
    puts 'user won'
end