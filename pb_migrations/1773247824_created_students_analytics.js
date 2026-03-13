/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "xyt2kqdu4wwfdhe",
    "created": "2026-03-11 16:50:24.204Z",
    "updated": "2026-03-11 16:50:24.204Z",
    "name": "students_analytics",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "mfrvct9j",
        "name": "curiosity_score",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      },
      {
        "system": false,
        "id": "uoiapvxm",
        "name": "total_score",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      },
      {
        "system": false,
        "id": "bwemilrn",
        "name": "learning_hours",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
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
  const collection = dao.findCollectionByNameOrId("xyt2kqdu4wwfdhe");

  return dao.deleteCollection(collection);
})
