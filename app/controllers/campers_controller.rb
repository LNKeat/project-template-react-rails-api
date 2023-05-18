class CampersController < ApplicationController
    def index 
        campers = Camper.all 
        render json: campers
    end

    # sign up
    def create 
        camper = Camper.create!(params_permit)
            session[:camper_id] = camper.id
            render json: camper, status: :created
    end

    def show 
        camper = Camper.find_by(id: session[:camper_id])
          render json: camper
    end

    def get_campsite-3
        camper = Camper.find_by(id: params[:camper_id])
        # filter {|item| block } → ary or nil
        reservations = camper.reservations.filter { |res| res.campsite.site_num == 3 }
        
        render json: 
    end

    private

    def params_permit 
        params.permit(:id, :username, :password, :password_confirmation, :is_admin)
    end

  

end
