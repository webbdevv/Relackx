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


puts "Seeding workspaces..."
workspace = Workspace.create!({"name": "Testing Workspace", "owner_id": 1})
# workspaces.each do |workspace|
#     Workspace.create!(workspace)
# end

channel_data = [
{"name":"Bauch and Sons","dm_flag": false, "owner_id": 1, "workspace_id": 1, "description":"id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque viverra pede ac diam cras pellentesque volutpat dui maecenas tristique"},
{"name":"Murphy and Sons","dm_flag": false, "owner_id": 1, "workspace_id": 1, "description":"libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit"},
{"name":"Jakubowski, Weber and Morar","dm_flag": false, "owner_id": 1, "workspace_id": 1, "description":"vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra"},
{"name":"Halvorson and Sons","dm_flag": false, "owner_id": 1, "workspace_id": 1, "description":"in porttitor pede justo eu massa donec dapibus duis at velit eu est congue elementum in"},
{"name":"Hand and Sons","dm_flag": false, "owner_id": 1, "workspace_id": 1, "description":"in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor lacus"},
{"name":"Casper-Stamm","dm_flag": false, "owner_id": 1, "workspace_id": 1, "description":"cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat"},
{"name":"Kihn and Sons","dm_flag": true, "owner_id": 1, "workspace_id": 1, "description":"congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor id"},
{"name":"Ferry, Zboncak and Kohler","dm_flag": true, "owner_id": 1, "workspace_id": 1, "description":"amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in"},
{"name":"Waelchi, Pfeffer and Ortiz","dm_flag": false, "owner_id": 1, "workspace_id": 1, "description":"nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu"},
{"name":"Fisher, Littel and Haag","dm_flag": false, "owner_id": 1, "workspace_id": 1, "description":"velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia"},
{"name":"Crooks-Breitenberg","dm_flag": true, "owner_id": 1, "workspace_id": 1, "description":"consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis"},
{"name":"Buckridge, Moore and Kautzer","dm_flag": false, "owner_id": 1, "workspace_id": 1, "description":"condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu"},
{"name":"Veum-Howell","dm_flag": false, "owner_id": 1, "workspace_id": 1, "description":"nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae quam suspendisse potenti nullam porttitor"},
{"name":"Steuber, Klein and Collins","dm_flag": false, "owner_id": 1, "workspace_id": 1, "description":"sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices"}]

puts "Seeding channels"
channel_data.each do |channel|
    Channel.create!(channel)
end


subscriptions = [{"subscriber_id":1,"subscribable_type": "Workspace","subscribable_id": 1},
{"subscriber_id":2,"subscribable_type": "Workspace","subscribable_id": 1},
{"subscriber_id":3,"subscribable_type": "Workspace","subscribable_id": 1},
{"subscriber_id":1,"subscribable_type": "Channel", "subscribable_id": 1}
]

# {"subscriber_id":5,"subscribable_type": "workspace","subscribable_id": 1},
# {"subscriber_id":6,"subscribable_type": "workspace","subscribable_id": 1},
# {"subscriber_id":1,"subscribable_type": "channel","subscribable_id": 1},
# {"subscriber_id":2,"subscribable_type": "channel","subscribable_id": 1},
# {"subscriber_id":3,"subscribable_type": "channel","subscribable_id": 1},
# {"subscriber_id":4,"subscribable_type": "channel","subscribable_id": 1},
# {"subscriber_id":5,"subscribable_type": "channel","subscribable_id": 1},
# {"subscriber_id":6,"subscribable_type": "channel","subscribable_id": 1},
# {"subscriber_id":1,"subscribable_type": "channel","subscribable_id": 2},
# {"subscriber_id":2,"subscribable_type": "channel","subscribable_id": 2},
# {"subscriber_id":3,"subscribable_type": "channel","subscribable_id": 2}]

puts "Seeding Subscriptions...maybe"
subscriptions.each do |subscription|
    Subscription.create!(subscription)
end