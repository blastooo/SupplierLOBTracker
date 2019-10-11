# Supplier Line of Balance Tracker

A prototype for a tool that integrates data from your company & supplier's Material Requirements Planning (MRP) systems, and displays it on a coherent visibility matrix. This allows for efficient tracking of parts status and streamlined identification/mitigation of risks. The tool also provides a standardized approach to managing multiple suppliers across the supply chain.

## Motivation

Suppliers often experience data integrity issues within their MRP systems. This results in losing track of which parts have been shipped/received, what demand requirements still exist, and which work orders should be prioritized. This tool is a way to bridge these gaps by reconciling data between your company & suppliers, and displaying the correct status of parts in real time.

## Built With

* [Reactjs](https://reactjs.org/) - Client Framework
* [Node.js](https://nodejs.org/en/) - Server
* [Express.js](https://expressjs.com/) - Server Framework
* [MySQL](https://www.mysql.com/) - Database
* [Babel](https://babeljs.io/) - Compiler
* [Webpack](https://webpack.js.org/) - Bundler
* [Faker.js](https://github.com/marak/Faker.js/) - Mock Data Generator
* [Moment.js](https://momentjs.com/) - Date/Time Manipulator

## API Reference

* [Google Places API](https://developers.google.com/places/web-service/intro) - query Supplier latitude longitude coordinates
* [Google Maps Javascript API](https://developers.google.com/maps/documentation/javascript/) - display map and Supplier location
* (Company Internal) Supplier List API: get list of Suppliers
* (Company Internal) Supplier Contracts API: get part number contracts for a Supplier
* (Company Internal) Inventory API: get inventory by part number
* (Company Internal) Demand API: get demand by part number
* (Supplier External) Supplier WIP API: get WIP by part number
