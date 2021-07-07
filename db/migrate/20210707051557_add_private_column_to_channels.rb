class AddPrivateColumnToChannels < ActiveRecord::Migration[5.2]
  def change
    add_column :channels, :is_private, :boolean
  end
end
