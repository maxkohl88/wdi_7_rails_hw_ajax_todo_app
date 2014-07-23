class ToDoSerializer < ActiveModel::Serializer
  attributes :id, :body, :complete
end
