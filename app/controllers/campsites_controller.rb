class CampsitesController < ApplicationController

    def index 
        campsites = Campsite.all
        render json: campsites
    end

    def create 
        campsite = Campsite.create(params_permit)
        render json: campsite
    end

    private

    def params_permit
        params.permit(:id, :site_number, :description, :img_url)
    end

   
end
