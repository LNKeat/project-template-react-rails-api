class SessionsController < ApplicationController
  # login
  # gets params from the login page, checks that the user exists and the password matches the stored password in the database, authenticating the user. Then stores that user into the session hash.  
    def create
      camper = Camper.find_by(username: params[:username])
      if camper&.authenticate(params[:password])
          session[:camper_id] = camper.id
          render json: camper, status: :created
        else
          render json: { errors: ["Invalid username or password"] }, status: :unauthorized
        end
    end

    #logout
    #removes user from the session hash
    def destroy 
      session.delete :camper_id
      head :no_content
    end
end
