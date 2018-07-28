INSERT INTO wsl1_products(name, price, description, image_url)
VALUES ($1, $2, $3, $4)
RETURNING *;