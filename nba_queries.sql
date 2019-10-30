SELECT * FROM players WHERE team = 'NYK';
SELECT * FROM players WHERE team = 'IND' AND age < 26;
SELECT * FROM players ORDER BY points DESC;
SELECT name, points/games AS points_per_game FROM players WHERE (points/games ) >= 20;
SELECT AVG(age) FROM players;
SELECT AVG(age) FROM players WHERE team = 'OKC';
SELECT AVG(age) FROM players WHERE games > 40;
SELECT team, SUM(points) FROM players GROUP BY team;
SELECT age, AVG(points) FROM players ORDER BY age;
SELECT age, AVG(points/games) FROM players GROUP BY age ORDER BY age;
SELECT team, players WHERE score > 12
SELECT player.team, COUNT(name) FROM players WHERE points/games > 12 GROUP BY players.team ORDER BY COUNT(name) DESC