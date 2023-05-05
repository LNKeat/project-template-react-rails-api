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
            render json: {errors: "Error"}
        end
    end

    private

    def params_permit 
        params.permit(:id, :username, :password, :password_confirmation, :is_admin)
    end

end
