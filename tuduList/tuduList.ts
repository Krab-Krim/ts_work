// import tasksJson from './tasks.json'
import fs from 'fs';

interface Task {
    id: number;
    description: string;
    completes: boolean;
}

class ToDoList {
    private tasks: Task[] = [];
    private nextId: number = 1
    private filePass: string

    constructor(fillePass: string = './tasks.json') {
        this.filePass = fillePass;
        this.loadTask()
    }

     addTask(description: string): void {
        const addTask: Task = {
            id: this.nextId++,
            description: description,
            completes: false
        }
        this.tasks.push(addTask)
        console.log(description)

        this.saveTask()
     }

     viewTasks(): void {
        this.tasks.forEach((el)=> {
            console.log(`Id: ${el.id}, Description: ${el.description}, Completes: ${el.completes}`)
        } )
     }

     completeTask(id: number): void {
        const task = this.tasks.find(el => el.id === id);

        if (task) {
            task.completes = true;
            console.log(` задача под номером ${id}: выполнена`)
            this.saveTask()
        } else {
            console.log(`false`)
        }
     }

     deleteTask(id: number): void {
        const task = this.tasks.find(el => el.id === id);

        if(task) {
            this.tasks = this.tasks.filter(el => el.id !== id);
					console.log(`задача под номером ${id}: удалена`)
                    this.saveTask()
        } else {
            console.log(`false`)
        }
     }

     editTask(id: number, newDescription: string): void {
        const task = this.tasks.find(el => el.id === id);

        if(task) {
            task.description = newDescription;
            this.saveTask()
        }
     }

     private loadTask(): void {
        try {
            if (fs.existsSync(this.filePass)) {
                const data = fs.readFileSync(this.filePass, 'utf-8');
                this.tasks = JSON.parse(data);
                if (this.tasks.length > 0) {
                    this.nextId = Math.max(...this.tasks.map(task => task.id)) + 1;
                }
            }
        } catch (error) {
            console.error('Ошибка при загрузке задач:', error);
        }
     }

     private saveTask(): void {
        try {
            const data = JSON.stringify(this.tasks, null, 2); // Форматируем JSON
            fs.writeFileSync(this.filePass, data, 'utf-8');
        } catch (error) {
            console.error('Ошибка при сохранении задач:', error);
        }
     }

     searchTask(str: string): void {
        const result = this.tasks.filter(el => el.description.toLocaleLowerCase().includes(str.toLocaleLowerCase()))
        if (result.length === 0) {
            console.log('no task')
        } else {
            console.log('task complited')
        }
     }

}
const todoList = new ToDoList();

todoList.addTask("Купить молоко");
todoList.addTask("Позвонить другу");
todoList.addTask("Прочитать книгу");

todoList.viewTasks(); // Показать все задачи
// todoList.viewTasks('completed'); // Показать только выполненные
// todoList.viewTasks('pending'); // Показать только невыполненные

todoList.completeTask(1); // Отметить задачу как выполненную
todoList.editTask(2, "Позвонить маме"); // Редактировать задачу
todoList.searchTask("книгу"); // Поиск задачи

todoList.deleteTask(3); // Удалить задачу
todoList.viewTasks();
















// const todoList = new ToDoList();

// console.log(todoList.addTask("Купить молоко"));

//  console.log(todoList.addTask("Позвонить другу"));
// console.log(todoList.viewTasks());

// console.log(todoList.completeTask(1));
// console.log(todoList.viewTasks());

// console.log(todoList.deleteTask(2));
// console.log(todoList.viewTasks());


