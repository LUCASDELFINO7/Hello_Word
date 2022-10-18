import { Controller, Get, HttpCode, HttpStatus } from "@nestjs/common";
import { PostagemService } from "../service/postagem.service";
import { Postagem } from "../entities/postagem.entities";

@Controller("/postagens") 
export class PostagemController{
    constructor(private readonly PostagemService: PostagemService){}

    @Get()
    @HttpCode(HttpStatus.OK)
    findaAll(): Promise<Postagem[]> {
        return this.PostagemService.findAll()
    }
    

} 