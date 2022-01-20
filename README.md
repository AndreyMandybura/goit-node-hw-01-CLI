# Получаем и выводим весь список контактов в виде таблицы (console.table)

node index.js --action list
https://monosnap.com/file/6SelmEXetoKWIKuccclOyOYXDFjbYP

# Получаем контакт по id

node index.js --action get --id 5
https://monosnap.com/file/yKTWTa0ew8PMM5OKsYsMDzuIH8WXhC

# Добавялем контакт

node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22
https://monosnap.com/file/Htk2vMFihWtwLsRtdgd1q3pOS9Wugk

# Удаляем контакт

node index.js --action remove --id=3
https://monosnap.com/file/EmMmDVAjRCkQDlgUOxxHYnivWnt5Zd
