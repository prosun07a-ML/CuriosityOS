/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "i3q4liw4jf9dg0i",
    "created": "2026-03-11 16:51:33.014Z",
    "updated": "2026-03-11 16:51:33.014Z",
    "name": "chat_logs",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "dgktxm6j",
        "name": "user_query",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("i3q4liw4jf9dg0i");

  return dao.deleteCollection(collection);
})
