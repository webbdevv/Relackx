class Message < ApplicationRecord
    validates :author_id, :channel_id, :body, presence: true

    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User

    belongs_to :channel,
        class_name: :Channel

    has_many :replies, 
        class_name: :Message, 
        foreign_key: :parent_message_id

    belongs_to :parent_message, optional: true,
        class_name: :Message
        
end