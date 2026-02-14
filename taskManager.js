// TaskManagerクラスは、タスクの管理を行うためのクラスです。
// このクラスは、タスクの追加、削除、取得を行う機能を提供します。
// さらに、タスクの状態を追跡し、全タスクの一覧を取得することもできます。

class TaskManager {
    constructor() {
        // タスクを格納するための配列を初期化します。
        this.tasks = [];
    }

    // タスクを追加するメソッド
    addTask(task) {
        // 引数のタスクをtasks配列に追加します。
        this.tasks.push(task);
    }

    // タスクを削除するメソッド
    removeTask(taskID) {
        // 指定されたIDのタスクをtasks配列から削除します。
        this.tasks = this.tasks.filter(task => task.id !== taskID);
    }

    // すべてのタスクを取得するメソッド
    getAllTasks() {
        // 全タスクを返します。
        return this.tasks;
    }

    // タスクの状態を更新するメソッド
    updateTask(taskID, updatedData) {
        // 指定されたIDのタスクを更新します。
        const taskIndex = this.tasks.findIndex(task => task.id === taskID);
        if (taskIndex > -1) {
            this.tasks[taskIndex] = { ...this.tasks[taskIndex], ...updatedData };
        }
    }
}

// 使用例
// const manager = new TaskManager();
// manager.addTask({ id: 1, name: 'タスク1', completed: false });
// manager.removeTask(1);