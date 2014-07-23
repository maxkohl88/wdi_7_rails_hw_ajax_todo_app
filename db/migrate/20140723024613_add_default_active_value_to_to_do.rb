class AddDefaultActiveValueToToDo < ActiveRecord::Migration
  def up
    change_column :to_dos, :active, :boolean, default: true
  end

  def down
    change_column :to_dos, :active, :boolean, default: nil
  end
end
