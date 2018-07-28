CREATE TABLE wsl1_products(
    id SERIAL PRIMARY KEY,
    name VARCHAR,
    price INTEGER,
    description TEXT,
    image_url TEXT
);

INSERT INTO wsl1_products(name, price, description, image_url)
VALUES ('shoes', 65, 'these shoes make it feel like you are walking on clouds', 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTLTVIp_zahDzBrwkP5yVj241dnxWJHHU6DF68l3pjmKKBjQhg1eloDV4xd5nsq9jbmmLJpeHTrO9ad357gUFDsrBuv1YSzrK0vH2PZEMRurrB-PU4VsCd6&usqp=CAY'),
('shirt', 7, 'comfy t-shirts in all sizes', 'https://mms-cloudfront.customink.com/mms/images/catalog/e225c5b84d5d200ea6652e45e91b8faa/styles/297300/catalog_detail_image_large.jpg?ixlib=rails-2.1.4&w=700&h=700&fit=crop&dpr=1&q=60&fm=pjpg&auto=compress'),
('shorts', 35, 'It is hot out and you should be wearing these shorts!', 'https://www.rvca.com/media/transfer/img/m3211wes_pav_1we.jpg');
