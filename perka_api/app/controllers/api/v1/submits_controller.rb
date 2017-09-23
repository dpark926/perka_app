class Api::V1::SubmitsController < ApplicationController
  def index
    submits = Submit.all
    render json: submits
  end

  def create
    submit = Submit.create(submit_params)
    render json: submit
  end

  private
  def submit_params
    params.require(:submit).permit(:first_name, :last_name, :email, :position_id, :explanation, :projects, :source, :resume)
  end
end
