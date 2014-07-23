class CreateToDos < ActiveRecord::Migration
  def change
    create_table :to_dos do |t|
      t.text :body
      t.boolean :active

      t.timestamps
    end
  end
end
