module Api 
  module V1
    class HousesController < ApplicationController
      def index
        houses = House.all 

        render json: HouseSerializer.new(houses).serializable_hash.to_json
      end

      def show
        house = House.find(params[:id])
        render json: {
          house: house,
          chores: house.chores,
          roommates: house.users
        }
      end
    end
  end
end