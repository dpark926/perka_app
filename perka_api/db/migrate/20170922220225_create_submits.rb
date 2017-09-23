class CreateSubmits < ActiveRecord::Migration[5.0]
  def change
    create_table :submits do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :position_id
      t.string :explanation
      t.string :projects
      t.string :source
      t.string :resume
    end
  end
end
