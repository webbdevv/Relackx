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

puts "Seeding subscriptions for workplaces"
w_subscriptions = [{"subscribable_type":"Workspace","subscriber_id":1,"subscribable_id":1},
{"subscribable_type":"Workspace","subscriber_id":2,"subscribable_id":1},
{"subscribable_type":"Workspace","subscriber_id":3,"subscribable_id":1},
{"subscribable_type":"Workspace","subscriber_id":4,"subscribable_id":1},
{"subscribable_type":"Workspace","subscriber_id":5,"subscribable_id":1},
{"subscribable_type":"Workspace","subscriber_id":6,"subscribable_id":1},
{"subscribable_type":"Workspace","subscriber_id":7,"subscribable_id":1},
{"subscribable_type":"Workspace","subscriber_id":8,"subscribable_id":1},
{"subscribable_type":"Workspace","subscriber_id":9,"subscribable_id":1},
{"subscribable_type":"Workspace","subscriber_id":10,"subscribable_id":1},
{"subscribable_type":"Workspace","subscriber_id":11,"subscribable_id":1},
{"subscribable_type":"Workspace","subscriber_id":12,"subscribable_id":1},
{"subscribable_type":"Workspace","subscriber_id":13,"subscribable_id":1},
{"subscribable_type":"Workspace","subscriber_id":14,"subscribable_id":1},
{"subscribable_type":"Workspace","subscriber_id":15,"subscribable_id":1}]

w_subscriptions.each do |subscription|
    Subscription.create!(subscription)
end

puts "Seeding subscriptions for channels"
c_subscriptions = [{"subscribable_type":"Channel","subscriber_id":1,"subscribable_id":1},
{"subscribable_type":"Channel","subscriber_id":1,"subscribable_id":2},
{"subscribable_type":"Channel","subscriber_id":1,"subscribable_id":3},
{"subscribable_type":"Channel","subscriber_id":1,"subscribable_id":4},
{"subscribable_type":"Channel","subscriber_id":1,"subscribable_id":5},
{"subscribable_type":"Channel","subscriber_id":2,"subscribable_id":1},
{"subscribable_type":"Channel","subscriber_id":2,"subscribable_id":2},
{"subscribable_type":"Channel","subscriber_id":2,"subscribable_id":3},
{"subscribable_type":"Channel","subscriber_id":2,"subscribable_id":4},
{"subscribable_type":"Channel","subscriber_id":2,"subscribable_id":5},
{"subscribable_type":"Channel","subscriber_id":3,"subscribable_id":1},
{"subscribable_type":"Channel","subscriber_id":3,"subscribable_id":2},
{"subscribable_type":"Channel","subscriber_id":3,"subscribable_id":3},
{"subscribable_type":"Channel","subscriber_id":3,"subscribable_id":4},
{"subscribable_type":"Channel","subscriber_id":3,"subscribable_id":5},
{"subscribable_type":"Channel","subscriber_id":4,"subscribable_id":1},
{"subscribable_type":"Channel","subscriber_id":4,"subscribable_id":2},
{"subscribable_type":"Channel","subscriber_id":4,"subscribable_id":3},
{"subscribable_type":"Channel","subscriber_id":4,"subscribable_id":4},
{"subscribable_type":"Channel","subscriber_id":4,"subscribable_id":5},
{"subscribable_type":"Channel","subscriber_id":5,"subscribable_id":1},
{"subscribable_type":"Channel","subscriber_id":5,"subscribable_id":2},
{"subscribable_type":"Channel","subscriber_id":5,"subscribable_id":3},
{"subscribable_type":"Channel","subscriber_id":5,"subscribable_id":4},
{"subscribable_type":"Channel","subscriber_id":5,"subscribable_id":5},
{"subscribable_type":"Channel","subscriber_id":6,"subscribable_id":1},
{"subscribable_type":"Channel","subscriber_id":6,"subscribable_id":2},
{"subscribable_type":"Channel","subscriber_id":6,"subscribable_id":3},
{"subscribable_type":"Channel","subscriber_id":6,"subscribable_id":4},
{"subscribable_type":"Channel","subscriber_id":6,"subscribable_id":5}]
c_subscriptions.each do |subscription|
    Subscription.create!(subscription)
end

messages = [{"body":"Nunc purus. Phasellus in felis. Donec semper sapien a libero.","author_id":6,"channel_id":4},
{"body":"Nulla mollis molestie lorem.","author_id":6,"channel_id":2},
{"body":"Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.","author_id":6,"channel_id":5},
{"body":"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.","author_id":1,"channel_id":5},
{"body":"Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.","author_id":4,"channel_id":5},
{"body":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus.","author_id":6,"channel_id":2},
{"body":"Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.","author_id":4,"channel_id":3},
{"body":"Aenean fermentum.","author_id":1,"channel_id":2},
{"body":"Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.","author_id":1,"channel_id":2},
{"body":"Aliquam erat volutpat. In congue.","author_id":4,"channel_id":1},
{"body":"In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.","author_id":6,"channel_id":3},
{"body":"Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.","author_id":1,"channel_id":4},
{"body":"Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.","author_id":2,"channel_id":4},
{"body":"In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.","author_id":1,"channel_id":1},
{"body":"Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.","author_id":4,"channel_id":2},
{"body":"Nulla facilisi. Cras non velit nec nisi vulputate nonummy.","author_id":1,"channel_id":3},
{"body":"Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.","author_id":3,"channel_id":2},
{"body":"Praesent blandit.","author_id":3,"channel_id":5},
{"body":"Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.","author_id":2,"channel_id":1},
{"body":"Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.","author_id":4,"channel_id":1},
{"body":"Etiam faucibus cursus urna. Ut tellus.","author_id":5,"channel_id":1},
{"body":"Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.","author_id":6,"channel_id":5},
{"body":"Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.","author_id":2,"channel_id":2},
{"body":"Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.","author_id":1,"channel_id":5},
{"body":"Nulla ut erat id mauris vulputate elementum.","author_id":4,"channel_id":5},
{"body":"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.","author_id":2,"channel_id":4},
{"body":"Duis mattis egestas metus.","author_id":5,"channel_id":2},
{"body":"Donec posuere metus vitae ipsum.","author_id":6,"channel_id":1},
{"body":"Morbi non quam nec dui luctus rutrum. Nulla tellus.","author_id":2,"channel_id":2},
{"body":"Integer ac leo. Pellentesque ultrices mattis odio.","author_id":4,"channel_id":4},
{"body":"Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.","author_id":6,"channel_id":5},
{"body":"Praesent id massa id nisl venenatis lacinia.","author_id":4,"channel_id":1},
{"body":"Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.","author_id":6,"channel_id":1},
{"body":"Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.","author_id":1,"channel_id":3},
{"body":"Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.","author_id":6,"channel_id":2},
{"body":"Integer a nibh. In quis justo.","author_id":4,"channel_id":3},
{"body":"In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.","author_id":3,"channel_id":4},
{"body":"Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.","author_id":6,"channel_id":3},
{"body":"Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.","author_id":1,"channel_id":1},
{"body":"Integer non velit.","author_id":5,"channel_id":1},
{"body":"Etiam faucibus cursus urna. Ut tellus.","author_id":4,"channel_id":3},
{"body":"Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.","author_id":2,"channel_id":1},
{"body":"Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.","author_id":2,"channel_id":5},
{"body":"Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.","author_id":3,"channel_id":2},
{"body":"Morbi vel lectus in quam fringilla rhoncus.","author_id":4,"channel_id":2},
{"body":"In eleifend quam a odio.","author_id":2,"channel_id":2},
{"body":"Proin eu mi. Nulla ac enim.","author_id":6,"channel_id":2},
{"body":"Nam dui.","author_id":4,"channel_id":5},
{"body":"Ut tellus.","author_id":3,"channel_id":4},
{"body":"Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.","author_id":5,"channel_id":2},
{"body":"Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.","author_id":4,"channel_id":1},
{"body":"Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.","author_id":1,"channel_id":5},
{"body":"Proin eu mi. Nulla ac enim.","author_id":6,"channel_id":3},
{"body":"Aliquam erat volutpat.","author_id":1,"channel_id":5},
{"body":"Aenean lectus.","author_id":1,"channel_id":3},
{"body":"Proin interdum mauris non ligula pellentesque ultrices.","author_id":5,"channel_id":1},
{"body":"Aenean lectus.","author_id":4,"channel_id":3},
{"body":"Aenean sit amet justo.","author_id":2,"channel_id":2},
{"body":"Aenean auctor gravida sem.","author_id":1,"channel_id":5},
{"body":"Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.","author_id":5,"channel_id":4},
{"body":"Vestibulum sed magna at nunc commodo placerat. Praesent blandit.","author_id":3,"channel_id":5},
{"body":"Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.","author_id":6,"channel_id":4},
{"body":"Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.","author_id":4,"channel_id":1},
{"body":"Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.","author_id":5,"channel_id":4},
{"body":"Donec vitae nisi.","author_id":5,"channel_id":2},
{"body":"Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.","author_id":5,"channel_id":5},
{"body":"Ut tellus.","author_id":2,"channel_id":5},
{"body":"Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.","author_id":3,"channel_id":3},
{"body":"Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.","author_id":6,"channel_id":2},
{"body":"Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.","author_id":1,"channel_id":1}]

puts "Seeding messages"
messages.each do |message|
    Message.create!(message)
end