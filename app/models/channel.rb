class Channel < ApplicationRecord
    validates :name, :owner_id, :workspace_id, presence: true
    validates :name, uniqueness: {scope: :workspace_id, message: 'Only one channel with a given name in a workspace allowed'}
    validates_inclusion_of :dm_flag, in: [true, false]
    
    belongs_to :workspace,
        foreign_key: :workspace_id,
        class_name: :Workspace
    
    has_many :subscriptions, as: :subscribable, dependent: :destroy

    has_many :users,
        through: :subscriptions,
        source: :subscriber

    has_many :messages,
        class_name: :Message
end
