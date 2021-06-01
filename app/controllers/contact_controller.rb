class ContactController < ApplicationController
  def create
    @contact = Contact.new(params[:contact])
    if @contact.save
      flash[:success] = "Object successfully created"
    else
      flash[:error] = "Something went wrong"
    end
    redirect_to root
  end
end
