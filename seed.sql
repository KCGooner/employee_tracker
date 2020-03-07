use employee_track_db;

INSERT INTO department (name)
VALUES  ("HR"), 
        ("Accounting"), 
        ("Marketing"), 
        ("Manager"), 
        ("Sales");

INSERT INTO role (title, salary, department_id)
VALUE   ("HR", 70000, 1), 
        ("Accountant", 50000, 2), 
        ("Marketing", 40000, 3),   
        ("Sales", 45000, 4), 
        ("Manager", 60000, 5);
        
INSERT INTO employee (first_name, last_name, salary, role_id, manager_id)
VALUE ("James", "Hadley", 50000, 2, 4),
	("Dennis", "Horn", 50000, 2, 4),
      ("Alyssa", "Mons", 70000, 1, 1),
      ("Bill", "Williams", 40000, 3, 2),
      ("Gordon", "Smith", 40000, 3, 2),
      ("Jimmy", "Jones", 45000, 4, 3),
      ("Sam", "Frans", 45000, 4, 3),
      ("Buddy", "Burns", 45000, 4, 3),
      ("Gale", "Knope", 60000, 5, 1);