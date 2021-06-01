class PagesController < ApplicationController
  def home
    # raise
    @contact = Contact.new
  end
end
