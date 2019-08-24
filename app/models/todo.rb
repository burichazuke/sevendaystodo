class Todo < ApplicationRecord
  belongs_to :user

  validates :name, :description, :deadline, :status, presence: true
end
