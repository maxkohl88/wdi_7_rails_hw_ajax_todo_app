class ToDoSerializer < ActiveModel::Serializer
  attributes :id, :body, :active
end
