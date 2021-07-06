class Subscription < ApplicationRecord
    validates :subscribable_type, :subscriber_id, :subscribable_id, presence: true

    belongs_to :subscribable, polymorphic: true

    belongs_to :subscriber,
        foreign_key: :subscriber_id,
        class_name: :User

    belongs_to :channel,
        foreign_key: :subscribable_id,
        class_name: :Channel

    belongs_to :workspace,
        foreign_key: :subscribable_id,
        class_name: :Workspace
end