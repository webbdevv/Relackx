class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email, null: false, unique: true
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :fav_color, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      
      t.timestamps
    end
  end
end
