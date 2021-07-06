class Workspace < ApplicationRecord
    validates :name, :owner_id, presence: true

    has_many :subscriptions, as: :subscribable
    has_many :channels,
        foreign_key: :workspace_id,
        class_name: :Channel

    has_many :users,
        through: :subscriptions,
        source: :subscriber
end