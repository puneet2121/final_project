module Api 
  module V1
    class ChoreController < ApplicationController
      def index
        chores = Chore.all 

        # render json: ChoreSerializer.new(chores).serializable_hash.to_json
        render json: chores
      end
    end
  end
end