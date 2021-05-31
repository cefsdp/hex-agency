class CreateFormContacts < ActiveRecord::Migration[6.1]
  def change
    create_table :form_contacts do |t|
      t.string :nom
      t.string :prenom
      t.string :telephone
      t.string :email
      t.string :entreprise
      t.string :poste
      t.string :budget
      t.string :message
      t.string :codepromo

      t.timestamps
    end
  end
end
