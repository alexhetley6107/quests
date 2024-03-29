#Что такое прототип?

- Объект, на который указывает ссылка proto, называется «прототипом»
- При чтении свойства из объекта, если его в нём нет, оно ищется в proto
- Операции присвоения или удаления свойства совершаются всегда над самим объектом obj.

---

#Как работает прототипное наследование?

- Объекты JS связаны цепочками прототипов с помощью proto свойства, по которым им передаются методы и свойства. При обращении к свойству или методу объекта сначала происходит поиск этого свойства у самого объекта. В случае неудачи поиск перенаправляется в его прототип.
- Например, когда мы хотим прочитать свойство из object, а оно отсутствует, JavaScript автоматически берёт его из прототипа, если оно существует.

---

Как работает Function.prototype.bind()?

- Данный метод возвращает функцию, по отношению к которой он вызывается, но с подмененным контекстом.
