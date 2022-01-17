# Получаем и выводим весь список контактов в виде таблицы (console.table)

node index.js --action list
https://monosnap.com/file/oy0fbNWw8WW4j5rzu0TWKEuPkvCIVn

# Получаем контакт по id

node index.js --action get --id 5
https://monosnap.com/file/qreZWm145onYxxdkfGspVeEoEAoLei

# Добавялем контакт

node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22
https://monosnap.com/file/xAY44FXUbaH7pxbxO7Gv5wLalPTkcx

# Удаляем контакт

node index.js --action remove --id=3
https://monosnap.com/file/0EABLtg3j6TnsdM1MFlNoGXWXeFTZS
