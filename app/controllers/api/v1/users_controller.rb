module Api 
  module V1
    class UsersController < ApplicationController
      def index
        users = User.all 

        render json: UserSerializer.new(users).serializable_hash.to_json
      end
      def show
        user = User.find(params[:id])
        user_id = User.find(params[:id])
        chores = Chore.where("user_id = #{user_id.id}")
        
        render json: {user:user, house: user.house.users,chores:chores}
        # user_id = User.find(params[:id])
        
      end
      def login
        puts 'login routes'
        user = User.find_by(name: params[:name])
        puts 'login User found'
        puts user
        render json: {user:user}
      end
      # def view 
        
      #   render json: {users:user_id,chores:chores}
      # end
    end
  end
end