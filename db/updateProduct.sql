UPDATE wsl1_products 
SET name = $1, price = $2, description = $3
WHERE id = $4
RETURNING *;
