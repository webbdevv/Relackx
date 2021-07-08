class Subscription < ApplicationRecord
    validates :subscribable_type, :admin, :subscriber_id, :subscribable_id, presence: true
    belongs_to :subscribable, polymorphic: true

    belongs_to :subscriber,
        foreign_key: :subscriber_id,
        class_name: :User

    def channel
        if subscribable_type == "Channel"
            Channel.find_by(id: self.subscribable_id)
        end
    end

    def workspace
        if subscribable_type == "Workspace"
            Workspace.find_by(id: self.subscribable_id)
        end
    end
end