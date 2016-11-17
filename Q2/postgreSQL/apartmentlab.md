Questions

Write down the following sql statements that are required to solve the following tasks.

1. Show all the tables (this is a psql command).
\d

2. Show all the users (this is a psql command).
\du

3. Show all the data about the owners table (this is a psql command).
\d owners

4. Show the names of all owners.
SELECT name FROM owners;

5. Show the ages of all of the owners in ascending order.
SELECT name, age FROM owners ASC;

Show the name of any owner whose name is Donald.

Show the age of all owners who are older than 30.

Show the name of all owners whose name starts with an E.

Add an owner named John who is 33 years old to the owners table.

Add an owner named Jane who is 43 years old to the owners table.

Change Jane's age to 30.

Change Jane's name to Janet.

Add a property named Archstone that has 20 units.

Delete the owner named Janet.

Show all of the properties in alphabetical order that are not named Archstone and do not have an id of 3 or 5.

Count the total number of rows in the properties table

Show the highest age

Show the names of the first three owners in your owners table.
