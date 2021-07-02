require 'json'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
users_data = [{"first_name":"Lorelei","last_name":"Fleckness","email":"lfleckness0@dagondesign.com","fav_color":"#41b188","password":"GWvFFp"},
{"first_name":"Cleve","last_name":"Elcome","email":"celcome1@list-manage.com","fav_color":"#a79a55","password":"S7Gnc2q2N"},
{"first_name":"Virgie","last_name":"Haggish","email":"vhaggish2@npr.org","fav_color":"#eb5f1e","password":"LUhbkSCtQai"},
{"first_name":"Anny","last_name":"Feathers","email":"afeathers3@sfgate.com","fav_color":"#5e1f50","password":"bqcPKT4Vi"},
{"first_name":"Bayard","last_name":"Broadberrie","email":"bbroadberrie4@nifty.com","fav_color":"#d7769d","password":"9gco7qDwJ4xE"},
{"first_name":"Upton","last_name":"Stanborough","email":"ustanborough5@constantcontact.com","fav_color":"#8ae911","password":"DMncT0ci29d2"},
{"first_name":"Homere","last_name":"Somerset","email":"hsomerset6@arstechnica.com","fav_color":"#14a05e","password":"ugehSA2e"},
{"first_name":"Bartolemo","last_name":"Falco","email":"bfalco7@buzzfeed.com","fav_color":"#d3b3e1","password":"xlKD6q8vb0"},
{"first_name":"Judd","last_name":"Goves","email":"jgoves8@storify.com","fav_color":"#547e2f","password":"5dBiDJd"},
{"first_name":"Dolf","last_name":"Van Bruggen","email":"dvanbruggen9@alexa.com","fav_color":"#0dccc9","password":"t1EQIWM1Nca"},
{"first_name":"Lowe","last_name":"Maben","email":"lmabena@time.com","fav_color":"#47fd28","password":"adlPhDIo"},
{"first_name":"Gail","last_name":"Gallop","email":"ggallopb@yelp.com","fav_color":"#2f1a29","password":"3ravL4sOf"},
{"first_name":"Miriam","last_name":"Milsted","email":"mmilstedc@bizjournals.com","fav_color":"#9992fd","password":"jKdm2ga"},
{"first_name":"Dianne","last_name":"Proske","email":"dprosked@opera.com","fav_color":"#dd689a","password":"JGhaPzhiDXoi"},
{"first_name":"Corella","last_name":"Cantua","email":"ccantuae@imageshack.us","fav_color":"#f2fbc8","password":"o9PzyO3"}]

puts "Seeding users..."
users_data.each do |user|
    User.create!(user)
end