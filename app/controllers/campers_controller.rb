class CampersController < ApplicationController
    def index 
        campers = Camper.all 
        render json: campers
    end

    # sign up
    def create 
        camper = Camper.create!(params_permit)
        # if camper
        #     session[:camper_id] = camper.id
        #     render json: camper, status: :created
        # else
        #     render json: {errors: "Not working is working!"}
        # end
        camper = Camper.create!(params_permit)
            session[:camper_id] = camper.id
            render json: camper, status: :created
    end

    def show 
        camper = Camper.find_by(id: session[:camper_id])
          render json: camper
    end

    private

    def params_permit 
        params.permit(:id, :username, :password, :password_confirmation, :is_admin)
    end

end
