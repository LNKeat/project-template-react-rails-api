class CampersController < ApplicationController
    def index 
        campers = Camper.all 
        render json: campers
    end

    def create 
        camper = Camper.create!(params_permit)
        if camper
        render json: camper, status: :created
        else
            render json: {errors: "Not working is working!"}
        end
    end

    def show 
        camper = Camper.find_by(id: session[:camper_id])
        if camper
          render json: camper
        else
          render json: { error: "Not authorized" }, status: :unauthorized
        end
    end

    private

    def params_permit 
        params.permit(:id, :username, :password, :password_confirmation, :is_admin)
    end

end
