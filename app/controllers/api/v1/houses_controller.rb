module Api 
  module V1
    class HousesController < ApplicationController
      def index
        houses = House.all 

        render json: HouseSerializer.new(houses).serializable_hash.to_json
      end
    end
  end
end