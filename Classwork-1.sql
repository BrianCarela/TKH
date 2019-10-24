SELECT title FROM Games;
SELECT * FROM Games WHERE year < 1998;
SELECT * FROM Games AVG(year);
SELECT AVG(year) FROM Games;
SELECT * FROM Games ORDER BY title;
SELECT title FROM Games ORDER BY year DESC;
SELECT AVG(year) FROM Games WHERE developers = 'Rare';
SELECT id, title, genre FROM Games WHERE year < 1997;
SELECT id, title, genre FROM Games WHERE developers = 'Hal Laboratory';