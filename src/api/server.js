import { createServer, Model } from "miragejs";
import { addDays } from "../todos/extensions";

export const makeServer = ({ environment = "test" } = {}) => {
  let server = createServer({
    environment,
    models: {
      todo: Model,
    },

    seeds(server) {
      server.create("todo", {
        title: "Close issue",
        content: "Close the issueee!",
        priority: "medium",
        state: "undone",
        createdAt: new Date(),
        lateDate: addDays(new Date(), 6),
      })
      server.create("todo", {
        title: "Open issue",
        content: "Open the issueee!",
        priority: "low",
        state: "done",
        createdAt: new Date(),
        lateDate: addDays(new Date(), 2),
      })
      server.create("todo", {
        title: "Open pull request",
        content: "Open the pull request!",
        priority: "high",
        state: "undone",
        createdAt: new Date(),
        lateDate: addDays(new Date(), 12),
      })
    },

    routes() {
        this.namespace = "api";
        
        this.get("/todos", (schema) => {
            return schema.todos.all()
        });

        this.post("/todos", (schema, request) => {
            let todo = JSON.parse(request.requestBody);
            schema.todos.create(todo);
            return true;
        });

        this.put("/todos/:id", (schema, request) => {
            let oldTodo = schema.todos.find(request.params.id);
            let newTodo = JSON.parse(request.requestBody);
            
            oldTodo.update(newTodo);
            return true;
        });
    },
  });

  return server;

}
