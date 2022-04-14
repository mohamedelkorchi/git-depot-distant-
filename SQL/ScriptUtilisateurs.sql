drop user if exists 'util1'@'%';
drop user if exists 'util2'@'%';
drop user if exists 'util3'@'%';

create user 'util1'@'%' identified by 'util1';
create user 'util2'@'%' identified by 'util2';
create user 'util3'@'%' identified by 'util3';

grant all privileges
on hotel.*
to 'util1'@'%';
flush privileges;

grant select 
on hotel.*
to 'util2'@'%';
flush privileges;

grant select
on hotel.station
to 'util3'@'%';
flush privileges;