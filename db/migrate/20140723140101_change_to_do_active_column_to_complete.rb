class ChangeToDoActiveColumnToComplete < ActiveRecord::Migration
  def up
    remove_column :to_dos, :active
    add_column :to_dos, :complete, :boolean, default: false
  end

  def down
    remove_column :to_dos, :complete
    add_column :to_dos, :active, :boolean, default: true
  end
end
