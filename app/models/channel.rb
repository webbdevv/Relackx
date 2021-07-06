class Channel < ApplicationRecord
    validates :name, :owner_id, :workspace_id, presence: true
    validates :name, uniqueness: true
    validates_inclusion_of :dm_flag, in: [true, false]
    
    belongs_to :workspace,
        foreign_key: :workspace_id,
        class_name: :Workspace
    
    has_many :subscriptions, as: :subscribable

    has_many :users,
        through: :subscriptions,
        source: :subscriber

end
