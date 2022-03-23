# membuat aplikasi yang menentukan apakah variable number merupakan:
# - Kelipatan 3 dan 5 (Kelipatan 15)
# - Kelipatan dari 5
# - Kelipatan dari 3
# - Kelipatan dari 3 atau 5

number = 27

if number%3==0 && number%5==0
  puts "Ini adalah kelipatan dari 15"
elsif number%5==0
  puts "Ini adalah kelipatan dari 5"
elsif number%3==0
  puts "Ini adalah kelipatan dari 3"
else
  puts "Ini bukan kelipatan dari 3 atau 5"
end