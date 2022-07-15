module Api 
  module V1
    class ChoreController < ApplicationController
      skip_before_action :verify_authenticity_token

      def index
        chores = Chore.all 

        # render json: ChoreSerializer.new(chores).serializable_hash.to_json
        render json: chores
      end

      def create
        @chore = Chore.create!(chore_params)
      end


      private

      def chore_params
        params.require(:chore).permit(:chore_name, :house_id, :user_id)
      end

    end
  end
end