jedi_db=# SELECT * FROM Jedis WHERE lightsaber_color= 'red';
jedi_db=# SELECT * FROM Jedis WHERE tempted_by_dark_side= 'true';
jedi_db=# UPDATE Jedis SET lightsaber_color = 'green' WHERE lightsaber_color = 'gray';
jedi_db=# UPDATE Jedis SET years_training= years_training + 10  WHERE tempted_by_dark_side = true;
UPDATE 10
jedi_db=# UPDATE Jedis SET years_training= years_training + 30  WHERE lightsaber_color = 'blue';
UPDATE 6
jedi_db=# SELECT tempted_by_dark_side FROM Jedis WHERE years_training > 8;
jedi_db=# SELECT name, tempted_by_dark_side FROM Jedis WHERE years_training > 8;
jedi_db=# SELECT name, lightsaber_color FROM Jedis WHERE years_training < 8;
jedi_db=# SELECT SUM(years_training) FROM Jedis WHERE lightsaber_color='blue';
jedi_db=# SELECT AVG(years_training) FROM Jedis WHERE tempted_by_dark_side=false;
jedi_db=# SELECT SUM(years_training) FROM Jedis WHERE tempted_by_dark_side= true AND lightsaber_color='purple';