class AddGeneralToWorkspace < ActiveRecord::Migration[5.2]
  def change
    add_column :workspaces, :general_channel, :integer
  end
end
