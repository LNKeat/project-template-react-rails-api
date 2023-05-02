class CampersController < ApplicationController
    def index 
        campers = Camper.all 
        render json: campers
    end

    def create 
        camper = Camper.create(params_permit)
        render json: camper
    end


    private

    def params_permit 
        params.permit(:id, :username, :password_digest, :is_admin)
    end
end
