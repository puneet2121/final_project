module Api 
  module V1
    class ChoreController < ApplicationController
      skip_before_action :verify_authenticity_token

      def index
        chores = Chore.all 

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
        @chore = Chore.destroy(params[:id])
      end

      def update
        chore = Chore.find(params[:id])
        # chore.occurence = params[:occurence]

        if params[:user_id]
          chore.user_id = params[:user_id]
        end

        if  params[:occurence]
          chore.occurence = params[:occurence]
        end

        chore.save
        puts chore.errors.full_messages
        render json: {user_id:chore.user_id}

      end
      def view 
        chore = Chore.find(params[:id])
        render json: {
          chore: chore,
        }
      end
      private

      def chore_params
        params.require(:chore).permit(:chore_name, :house_id, :user_id, :occurence)
      end

    end
  end
end