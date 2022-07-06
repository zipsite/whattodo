export default class Task {
    name;
    description;
    group;
    check;
    importance;
    urgency;

    constructor(name, description, group, check, importance, urgency) {
        this.name = name;
        this.description = description;
        this.group = group;
        this.check = check;
        this.importance = importance;
        this.urgency = urgency;
    }

    setName(name) {
        this.name = name;
    }

    setDescription(description) {
        this.description = description;
    }

    setGroup(group) {
        this.group = group;
    }

    setChecked(check) {
        this.check = check;
    }

    setImportance(importance) {
        this.importance = importance;
    }

    setUrgency(urgency) {
        this.urgency = urgency;
    }

    getName() {
        return this.name;
    }

    getDescription() {
        return this.description;
    }

    getGroup() {
        return this.group; 
    }

    getChecked() {
        return this.check;
    }

    getImportance() {
        return this.importance;
    }

    getUrgency() {
        return this.urgency;
    }

}