require("dotenv").config();

const express=require("express");
const cors = require("cors");
const cookieParser=require("cookie-parser");
const passport=require("passport");
const MongoStore=require("connect-mongo");

const { dbMiddleware } =require("./middleware/index");
const {contentRoutes, readerRoutes, writerRoutes, guestRoutes, adminRoutes } =require("./routes/index");
const {PORT, SESSION_SECRECT, MONGO_URI, connectDB}=require("./config/index");

const morganConfig=require("./config/morgan.config");

const app=express();

(async()=>{
    try{
        await connectDB();
        console.log("Databasae connected successfully");

        app.use(morganConfig);
        app.set("trust proxy", 1);
        app.use(cookieParser());
        app.use(helmetMiddleware);
        app.use(sanitizeInput);

        app.use('/api/', rateLimitGlobal);

        app.use(express.json({limit: '8kb'}));
        app.use(express.urlencoded({extended: true, limit: '8kb'}));
        app.use(
            session({
                secret: SESSION_SECRECT,
                resave: false,
                saveUninitlized: false,
                store: MongoStore.create({mongoUrl: MONGO_URI}),
                cookie:{
                    maxAge: 10*24*60*60*1000,
                    httpOnly: true,
                    secure: process.env.NODE_ENV==="production",
                    sameSite:'lax',
                },
            })
        );

        app.use(passport.initialize());
        app.use(passport.session());

        app.get('/',(req, res)=> res.send("Server ready"));

        app.use("/api/content", contentRoutes);
        app.use("/api/user/reader", readerRoutes);
        app.use("/api/user/writer", writerRoutes);
        app.use("/api/user/guest", guestRoutes);
        app.use("/api/admin", adminRoutes);
        app.use("/api/user");

        app.use(dbMiddleware);

        app.listen(PORT,()=>{
            console.log(`Server started at ${PORT}`);
        });
    }catch(err){
        console.error("Startup failed: ", err);
        process.exit(1);
    }
})();