use employee_track_db;

INSERT INTO department (name)
VALUES  ("Human Resources"), 
        ("Accounting"), 
        ("Marketing"), 
        ("IT"), 
        ("Sales");

INSERT INTO role (title, salary, department_id)
VALUE   ("Supervisor", 70000, 1), 
        ("Accountant", 50000, 2), 
        ("Marketing", 40000, 3),   
        ("Sales", 45000, 4), 
        ("Manager", 60000, 5);
        
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE ("James", "Hadley", 2, 4),
	("Dennis", "Horn", 2, 1),
      ("Alyssa", "Mons", 3, 2),
      ("Bill", "Williams", 3, 2),
      ("Gordon", "Smith", 4, 3),
      ("Jimmy", "Jones", 4, 3),
      ("Sam", "Frans", 3, 1),
      ("Buddy", "Burns", 3, 4),
      ("Gale", "Knope", 1, 1);
		