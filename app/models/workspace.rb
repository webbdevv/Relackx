class Workspace < ApplicationRecord
    validates :name, :owner_id, presence: true

    has_many :subscriptions, as: :subscribable

    has_many :channels, dependent: :delete_all,
        foreign_key: :workspace_id,
        class_name: :Channel

    has_many :users,
        through: :subscriptions,
        source: :subscriber

    has_many :messages, dependent: :delete_all,
        through: :users,
        source: :messages

    has_many :dm_channels, -> { where(dm_flag: true) },
        class_name: :Channel
end