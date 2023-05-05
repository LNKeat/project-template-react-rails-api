class CampsitesController < ApplicationController

    def index 
        campsites = Campsite.all
        render json: campsites
    end

    def create 
        campsite = Campsite.create!(params_permit)
        render json: campsite, status: :created
    end

    def show 
        campsite = Campsite.find_by(params[:campsite_id])
        render json: campsite
    end

    def destroy 
        campsite = Campsite.find_by(params[:campsite_id])
        campsite.destroy
    end

    private

    def params_permit
        params.permit(:id, :site_number, :description, :img_url, :reservations)
    end

   
end
