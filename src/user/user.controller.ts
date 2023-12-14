import { Controller, Get, Patch, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import { GetUser } from '../auth/decorator';
import { JwtGaurd } from '../auth/gaurd';

@UseGuards(JwtGaurd)
@Controller('users')
export class UserController {
    @Get('me')
    getme(@GetUser() user:User){
        return user;
    }

    @Patch()
    editUser(){

    }
}
