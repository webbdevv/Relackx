class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true
    def created_time_formatted
        self.created_at.to_formatted_s(:long_ordinal)
    end
    def created_at_number
        self.created_at.to_formatted_s(:time)
    end
end
