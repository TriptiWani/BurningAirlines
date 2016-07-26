# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  name            :string
#  isAdmin         :boolean          default(FALSE)
#  email           :string
#  password_digest :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
