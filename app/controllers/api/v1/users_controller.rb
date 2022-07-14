module Api 
  module V1
    class UsersController < ApplicationController
      def index
        users = User.all 

        render json: UserSerializer.new(users).serializable_hash.to_json
      end
      def show
        user = User.find(params[:id])
        render json: {user:user, house: user.house.users}
        
      end
    end
  end
end