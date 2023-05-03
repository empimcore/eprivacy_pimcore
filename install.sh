mysql -u root -p -e "CREATE DATABASE pimcore charset=utf8mb4; \
                     CREATE USER 'pimcore'@'localhost' IDENTIFIED BY 'pimcoretest';
                     GRANT ALL PRIVILEGES ON pimcore.* To 'pimcore'@'localhost'; \
	             FLUSH PRIVILEGES;"


COMPOSER_MEMORY_LIMIT=-1 composer create-project pimcore/demo eprivacy_pimcore

DIR=$(PWD)

cd eprivacy_pimcore

PIMCORE_INSTALL_MYSQL_USERNAME=pimcore PIMCORE_INSTALL_MYSQL_PASSWORD=pimcoretest ./vendor/bin/pimcore-install \
  --admin-username=admin --admin-password=admin \
  --mysql-database=pimcore \
  --no-interaction
