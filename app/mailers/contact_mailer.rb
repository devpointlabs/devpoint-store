class ContactMailer < ApplicationMailer
  default from: "contact@test.com"

  def contact_email
    @name = params[:name]
    @email = params[:email]
    @subject = params[:subject]
    @message= params[:message]
    mail(to: 'test013120@gmail.com', subject: @subject )
  end
end
