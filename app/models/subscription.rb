class Subscription < ApplicationRecord
    validates :subscribable_type, :subscriber_id, :subscribable_id, presence: true
    belongs_to :subscribable, polymorphic: true


    belongs_to :subscriber,
        foreign_key: :subscriber_id,
        class_name: :User

    belongs_to :subscribable

    belongs_to :workspace,
        foreign_key: :subscribable_id,
        class_name: :Workspace

    belongs_to :channel,
        class_name: :Channel,
        foreign_key: :subscribable_id

    # def channel
    #     if subscribable_type == "Channel"
    #         Channel.find_by(id: self.subscribable_id)
    #     end
    # end

    # def workspace
    #     if subscribable_type == "Workspace"
    #         Workspace.find_by(id: self.subscribable_id)
    #     end
    # end
end