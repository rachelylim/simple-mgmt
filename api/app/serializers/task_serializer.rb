class TaskSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :deadline, :complete
end
