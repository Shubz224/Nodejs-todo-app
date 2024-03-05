import {app} from "../api/app.js"
import {connectDB} from "../api/data/database.js"



connectDB();

app.listen(process.env.PORT, () => {
    console.log(`server is working on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} Mode `);
  });
  