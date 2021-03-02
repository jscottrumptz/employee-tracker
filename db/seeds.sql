INSERT INTO department (name)
VALUES
    ('Sales'), -- 1
    ('Admin'), -- 2
    ('Accounting'), -- 3
    ('Art'), -- 4
    ('IT'), -- 5
    ('Shipping'); -- 6

INSERT INTO role (title,salary,department_id)
VALUES
    ('Sales Manager', 50000, 1), -- 1
    ('Sales Rep', 40000, 1), -- 2
    ('National Sales Rep', 80000, 1), -- 3
    ('Order Entry', 30000, 2), -- 4
    ('Order Verification', 30000, 2), -- 5
    ('Admin Manager', 40000, 2), -- 6
    ('Collections', 30000, 3), -- 7
    ('Accounts Payable', 30000, 3), -- 8
    ('Accounting Manager', 50000, 3), -- 9
    ('Graphic Artist', 40000, 4), -- 10
    ('Shipping Manager', 50000, 6), -- 11
    ('Warehouse Woker', 30000, 6), -- 12
    ('Systems Administrator', 60000, 5); -- 13

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('Scott', 'Rumptz', 1, NULL), -- 1
    ('Michelle', 'Vines', 6, NULL), -- 2
    ('Griffin', 'Homburger', 9, NULL), -- 3
    ('Mike', 'Penske', 11, NULL), -- 4
    ('Dave', 'Marsh', 2, 1), -- 5
    ('Sara', 'Pense', 2, 1), -- 6
    ('Lisa', 'Tickle', 3, 1), -- 7
    ('Misty', 'Tresky', 5, 6), -- 8
    ('Jason', 'Holland', 4, 6), -- 9
    ('Gary', 'Goike', 4, 6), -- 10
    ('Linda', 'Pense', 8, 9), -- 11
    ('Rachel', 'Tickle', 7, 9), -- 12
    ('Max', 'Tresky', 10, 1), -- 13
    ('John', 'Holland', 6, 11), -- 14
    ('Edward', 'Goike', 6, 11), -- 15
    ('Clyde', 'Bailing', 13, 1); -- 16