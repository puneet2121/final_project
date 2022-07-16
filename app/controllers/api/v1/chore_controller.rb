module Api 
  module V1
    class ChoreController < ApplicationController
      skip_before_action :verify_authenticity_token

      def index
        chores = Chore.all 

        # render json: ChoreSerializer.new(chores).serializable_hash.to_json
        render json: chores
      end

      def show
        chore = Chore.find(params[:id])
        render json: {
          chore: chore,
        }
      end

      def create
        @chore = Chore.create!(chore_params)
      end

      def destroy
        chore = Chore.destroy(params[:id])
      end


      private

      def chore_params
        params.require(:chore).permit(:chore_name, :house_id, :user_id)
      end

    end
  end
end