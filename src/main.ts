// Using express-session cookies
//  --------------------
//
//    import { NestFactory } from '@nestjs/core';
//    import { AppModule } from './app.module';
//    import * as session from 'express-session';
//    import * as passport from 'passport';
//
//    async function bootstrap() {
//      const app = await NestFactory.create(AppModule);
//
//      app.use(
//        session({
//          secret: 'secret_word',  // put env vars later
//          resave: false,
//          saveUnitialized: false,
//          cookie: { maxAge: 360000 },
//        }),
//      );
//
//      app.use(passport.initialize());
//      app.use(passport.session());
//
//      await app.listen(3000);
//    }
//    bootstrap();
//  ------------------------



// using JWT token authentication
// ---------------------

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
