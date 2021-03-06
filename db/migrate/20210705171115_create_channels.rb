class CreateChannels < ActiveRecord::Migration[5.2]
  def change
    create_table :channels do |t|
      t.string :name, null: false
      t.boolean :dm_flag
      t.boolean :is_private, default: false
      t.integer :owner_id, null: false
      t.integer :workspace_id, null: false
      t.text :description
      t.timestamps
    end

    create_table :workspaces do |t|
      t.string :name, null: false
      t.integer :owner_id, null: false
      t.timestamps
    end

    create_table :subscriptions do |t|
      t.integer :subscriber_id, null: false
      t.references :subscribable, polymorphic: true, null: false
      t.boolean :admin, default: false
      t.timestamps
    end

    create_table :messages do |t|
      t.integer :author_id, null: false
      t.integer :channel_id, null: false
      t.integer :parent_message_id
      t.text :body, null: false
      t.timestamps
    end
    add_index :channels, :workspace_id
    add_index :messages, :author_id
    add_index :messages, :channel_id
    add_index :messages, :parent_message_id
  end
end
