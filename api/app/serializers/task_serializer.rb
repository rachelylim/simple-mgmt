class TaskSerializer < ActiveModel::TaskSerializer
  attributes :id, :name, :description, :deadline, :complete
end