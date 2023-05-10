class AdminFormController < ApplicationController
        before_action :admin
     # To do: create & destroy actions are not being called on the server side


    def index
        next_site_num = Campsite.last.site_number + 1
        first_site_num = Campsite.first.site_number

        render json: {
            next_number:next_site_num,
            first_site:first_site_num
        }
    end

    def create 
        campsite = Campsite.create!(params_permit)
        render json: campsite, status: :created
    end

    def destroy 
        campsite = Campsite.find(params[:id])
        campsite.destroy
        head :no_content
    end

    private

    def params_permit
        params.permit(:id, :site_number, :description, :img_url, :reservations)
    end
end
