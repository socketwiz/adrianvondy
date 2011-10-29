require 'spec_helper'

describe IndexController do

  describe "GET 'contact/pages'" do
    it "should be successful" do
      get 'contact/pages'
      response.should be_success
    end
  end

end
