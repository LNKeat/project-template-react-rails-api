class AdminFormController < ApplicationController

    def create 
        campsite = Campsite.create!(params_permit)
        render json: campsite, status: :created
    end

    def destroy 
        campsite = Campsite.find(params[:id])
        campsite.destroy
    end

    private

    def params_permit
        params.permit(:id, :site_number, :description, :img_url, :reservations)
    end
end
