module Api
  module V1
    class TasksController < ApplicationController
      def index
        render json: Task.all
      end

      def create
        @task = Task.create(task_params)
        if @task.save
          render json: @task, status: 201
        else
          render json: @task.errors.full_messages, status: 422
        end
      end

      def edit
        @task = Task.find(params[:id])
      end

      def update
        @task = Task.find(params[:id])
        if @task.update_attributes(task_params)
          render json: @task, status: 201
        else
          render 'edit'
        end
      end

      private
      def task_params
        params.required(:task).permit(:name, :description, :deadline, :complete)
      end
    end
  end
end
