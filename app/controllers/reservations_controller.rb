class ReservationsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    def index
        reservations = Reservation.all
        render json: reservations
    end

    def show 
        reservation = find_res
        render json: reservation, serializer: CamperUsernameSerializer
    end

    def create 
        res = Reservation.find(params_permit)
        if res.valid?
            render json: res
        else
            render json: { errors: res.errors }, status: :unprocessable_entity
        end
    end


    private

    def find_res
        reservation = Reservation.find(params[:id])
    end

    def params_permit
        params.permit(:id, :camper_id, :campsite_id)
    end

    def render_not_found_response
        render json: { error: "Reservation not found" }, status: :not_found
    end
end
