Airplane.destroy_all;
Airplane.create(:name => '757',:rows => 4, :columns => 6);
Airplane.create(:name => '747',:rows => 10, :columns => 8);

Flight.destroy_all;
Flight.create(:number=>23, :origin=>'JFK' ,:destination=>'SFO' , :date =>'20/10/2016',:airplane_id => 2 );
Flight.create(:number=>87, :origin=>'JFK' ,:destination=>'LAX' , :date =>'10/08/2016',:airplane_id => 1);

User.destroy_all;
User.create(:name=>'Tiger' , :email =>'tiger@ga.com', :password =>'chicken',:password_confirmation =>'chicken' ,:isAdmin => true);
User.create(:name=>'Luke' , :email =>'luke@ga.com', :password =>'chicken',:password_confirmation =>'chicken');
