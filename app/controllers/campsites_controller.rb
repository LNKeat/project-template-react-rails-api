class CampsitesController < ApplicationController
    def index 
        campsites = Campsite.all
        render json: campsites
    end

   
end
