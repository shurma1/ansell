import sqlite3

class SQLighter:

    def __init__(self, database):
        self.connection = sqlite3.connect(database , check_same_thread=False)
        self.cursor = self.connection.cursor()
 

    def check_worker(self, login, password):
        with self.connection:
            result = self.cursor.execute('SELECT * FROM `workers` WHERE `login` = ? AND `password` = ?', (login, password)).fetchall()
            return bool(len(result))
    
    def check_meneger(self, login, password):
        with self.connection:
            result = self.cursor.execute('SELECT * FROM `users` WHERE `login` = ? AND `password` = ?', (login, password)).fetchall()
            return bool(len(result))


    def get_user_status(self, login, password):
        with self.connection:
            result = self.cursor.execute('SELECT status FROM `users` WHERE `login` = ? AND `password` = ?', (login, password)).fetchone()
            return result


    def get_user_from_id(self, identify):
        with self.connection:
            result = self.cursor.execute('SELECT status FROM `users` WHERE `id` = ? ', (identify,)).fetchone()
            return result


    def get_hand(self, login, password):
        with self.connection:
            result = self.cursor.execute('SELECT hand FROM `workers` WHERE `login` = ? AND `password` = ?', (login, password)).fetchone()
            return result

    def defect_check(self, rejectType, date, shift, hand, style, size, thisRound):
        with self.connection:
            return self.cursor.execute('SELECT rejectCount FROM `defect` WHERE `rejectType` = ? AND `date` = ? AND `shift` = ? AND `hand` = ? AND `style` = ? AND `size` = ? AND `round` = ?', (rejectType, date, shift, hand, style, size, thisRound)).fetchone()

    def new_defect(self, rejectType, date, shift, hand, style, size, thisRound, count):
        with self.connection:
            return self.cursor.execute("INSERT INTO `defect` (`rejectType`, `date`, `shift`, `hand`,`style`, `size`, `round`, `rejectCount`) VALUES(?,?,?,?,?,?,?,?)", (rejectType, date, shift, hand, style, size, thisRound, count))

    def add_count_defect(self, rejectType, date, shift, hand, style, size, thisRound, count):
        with self.connection:
            return self.cursor.execute('UPDATE `defect` SET `rejectCount`= `rejectCount` + ?  WHERE `rejectType` = ? AND `date` = ? AND `shift` = ? AND `hand` = ? AND `style` = ? AND `size` = ? AND `round` = ?', (count, rejectType, date, shift, hand, style, size, thisRound))

    def get_all_defect_table(self):
        with self.connection:
            return self.cursor.execute("SELECT * FROM `defect`").fetchall()

    def get_all_defect(self):
        with self.connection:
            return self.cursor.execute("SELECT * FROM `defect_list`").fetchall()

    def get_this_defects(self):
        with self.connection:
            return self.cursor.execute("SELECT * FROM `this_defects`").fetchall()

    def get_defect_id(self, dataId):
        with self.connection:
            return self.cursor.execute('SELECT id FROM `this_defects` WHERE `data-id` = ? ', (dataId,)).fetchone()

    def replace_defect_type(self, identify, replacement, replacementName):
        with self.connection:
            return self.cursor.execute("UPDATE `this_defects` SET `name`= ? , `data-id`= ? WHERE `id` = ?", (replacementName, replacement, identify))

    def get_users(self):
        with self.connection:
            return self.cursor.execute('SELECT * FROM `users`').fetchall()

    def get_workers(self):
        with self.connection:
            return self.cursor.execute('SELECT * FROM `workers`').fetchall()


    def edit_user_password(self, identify, password):
        with self.connection:
            return self.cursor.execute("UPDATE `users` SET `password`= ?  WHERE `id` = ?", (password, identify))

    def edit_worker_password(self, identify, password):
        with self.connection:
            return self.cursor.execute("UPDATE `workers` SET `password`= ?  WHERE `id` = ?", (password, identify))


    def remove_worker(self, identify):
        """Обновляем статус подписки пользователя"""
        with self.connection:
            return self.cursor.execute("DELETE FROM `workers` WHERE `id` = ?", (identify,))
    
    def remove_user(self, identify):
        """Обновляем статус подписки пользователя"""
        with self.connection:
            return self.cursor.execute("DELETE FROM `users` WHERE `id` = ?", (identify,))
    

    def new_user(self, login, password, status):
        with self.connection:
            return self.cursor.execute("INSERT INTO `users` (`login`, `password`, `status`) VALUES(?,?,?)", (login, password, status))

    def new_worker(self, login, password, hand):
        with self.connection:
            return self.cursor.execute("INSERT INTO `workers` (`login`, `password`, `hand`) VALUES(?,?,?)", (login, password, hand))



    def close(self):
        """Закрываем соединение с БД"""
        self.connection.close()