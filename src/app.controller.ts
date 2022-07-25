// Using express-session cookies
//  --------------------
//
//    import {Controller, Get, Post, Request, UseGuards} from '@nestjs/common';
//    import { AppService } from './app.service';
//    import {LocalAuthGuard} from "./auth/local-auth.guard";
//    import {AuthenticatedGuard} from "./auth/authenticated.guard";
//
//    @Controller()
//    export class AppController {
//      constructor(private readonly appService: AppService) {}
//
//      @UseGuards(LocalAuthGuard)
//      @Post('login')
//      login(@Request() req): any {
//        return { msg: 'Logged in !!!'};
//      }
//
//      @UseGuards(AuthenticatedGuard)
//      @Get('protected')
//      getHello(@Request() req): string {
//        return req.user
//      }
//    }
//  ---------------------




// using JWT token authentication
// ---------------------

import {Controller, Get, Post, Request, UseGuards} from '@nestjs/common';
import {LocalAuthGuard} from "./auth/local-auth.guard";
import {AuthService} from "./auth/auth.service";
import {JwtAuthGuard} from "./auth/jwt-auth.guard";

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req): any {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('protected')
  getHello(@Request() req): string {
    return req.user
  }
}
