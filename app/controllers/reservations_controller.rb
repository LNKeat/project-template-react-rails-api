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

    def update
        reservation = find_res
        reservation.update!(params_permit)
        render json: reservation, status: 200
    end

    def create 
        res = Reservation.create!(params_permit)
        render json: res, status: :created
    end

    def destroy 
        reservation = find_res
        reservation.delete
        head :no_content
    end


    private

    def find_res
        reservation = Reservation.find(params[:id])
    end

    def params_permit
        params.permit(:id, :camper_id, :campsite_id, :start_date, :end_date)
    end

    def render_not_found_response
        render json: { error: ["Reservation not found"] }, status: :not_found
    end
end
