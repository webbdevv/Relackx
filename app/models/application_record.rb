class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true
    def created_time_formatted
        self.created_at.to_s
    end
    def time_in_pst
      self.created_at.in_time_zone("Pacific Time (US & Canada)").to_formatted_s(:long_ordinal)
    end
end
