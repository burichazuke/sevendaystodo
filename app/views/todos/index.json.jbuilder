json.array!(@todos) do |todo|
  json.id todo.id
  json.title todo.name
  json.start todo.deadline
  json.url "/todos/#{todo.id}/edit"
end