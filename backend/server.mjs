import 'dotenv/config';

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import passport from "passport";
import MongoStore from "connect-mongo";
import session from "express-session";

import {dbMiddleware} from "./middleware/index.js";
import {contentRoutes, readerRoutes, writerRoutes, guestRoutes, userRoutes } from "./routes/index.js";
import {PORT, SESSION_SECRECT, MONGO_URI} from "./config/index.js";
import {connectDB} from "./config/db.config.js";

import morganConfig from "./config/morgan.config.js";

const app=express();

connectDB();
        console.log("Databasae connected successfully");

        app.use(morganConfig);
        app.set("trust proxy", 1);
        app.use(cookieParser());

        app.use(express.json({limit: '8kb'}));
        app.use(express.urlencoded({extended: true, limit: '8kb'}));
        app.use(
            session({
                secret: SESSION_SECRECT,
                resave: false,
                saveUninitialized: false,
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
        app.use("/api/user",userRoutes);

        app.use(dbMiddleware);

        app.listen(PORT,()=>{
            console.log(`Server started at ${PORT}`);
        });
    
