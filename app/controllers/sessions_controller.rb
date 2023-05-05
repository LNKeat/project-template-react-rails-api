class SessionsController < ApplicationController
  # login
    def create
        camper = Camper.find_by(username: params[:username])
        if camper&.authenticate(params[:password])
            session[:camper_id] = camper.id
            render json: camper, status: :created
          else
            render json: { errors: "Invalid username or password" }, status: :unauthorized
          end
    end

    def destroy 
      session.delete :camper_id
      head :no_content
    end
end
