# == Schema Information
#
# Table name: flights
#
#  id          :integer          not null, primary key
#  number      :integer
#  origin      :string
#  destination :string
#  date        :string
#  plane       :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Flight < ActiveRecord::Base
  belongs_to :airplane
  has_many :reservations
  # has_and_belongs_to_many :users
  has_many :users, :through => :reservations
end
