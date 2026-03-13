/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xyt2kqdu4wwfdhe")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9mw7n17n",
    "name": "Name",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "srkr8yfg",
    "name": "Class",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xyt2kqdu4wwfdhe")

  // remove
  collection.schema.removeField("9mw7n17n")

  // remove
  collection.schema.removeField("srkr8yfg")

  return dao.saveCollection(collection)
})
