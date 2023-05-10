class CampsitesController < ApplicationController

    def index 
        campsites = Campsite.all
        render json: campsites
    end

    # private

    # def params_permit
    #     params.permit(:id, :site_number, :description, :img_url, :reservations)
    # end

   
end
