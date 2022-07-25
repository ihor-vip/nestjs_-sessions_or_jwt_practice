// Using express-session cookies
// ---------------------------
//
//   import { Module } from '@nestjs/common';
//   import { AuthService } from './auth.service';
//   import {UsersModule} from "../users/users.module";
//   import {PassportModule} from "@nestjs/passport";
//   import {LocalStrategy} from "./local.strategy";
//   import {SessionSerializer} from "./session.serializer";
//
//   @Module({
//       imports: [UsersModule, PassportModule.register({ session: true})],
//       providers: [AuthService, LocalStrategy, SessionSerializer]
//   })
//   export class AuthModule {}
// ----------------------------



// using JWT token authentication
// ---------------------

import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import {UsersModule} from "../users/users.module";
import {PassportModule} from "@nestjs/passport";
import {LocalStrategy} from "./local.strategy";
import {JwtModule} from "@nestjs/jwt";
import {JwtStrategy} from "./jwt.strategy";

@Module({
  imports: [UsersModule, PassportModule, JwtModule.register({
    secret: 'Secret' , // put env vars
    signOptions: { expiresIn: '60s'},
  })],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService]
})
export class AuthModule {}
