class AdminFormController < ApplicationController
        before_action :authorize
     # To do: create & destroy actions are not being called on the server side


    def index
        render json: {
            site_number: 0,
            d_site_number: 0,
            img_url: "",
            description: "",
            reservations: []
        }
    end

    def create 
        campsite = Campsite.create!(params_permit)
        render json: campsite, status: :created
    end

    def destroy 
        campsite = Campsite.find(params[:id])
        campsite.destroy
    end


    private

    def authorize
        camper = Camper.find(session[:camper_id])
        render json: {error: "Unauthorized"}, status: :unauthorized unless camper.is_admin
    end

    def params_permit
        params.permit(:id, :site_number, :description, :img_url, :reservations)
    end
end
